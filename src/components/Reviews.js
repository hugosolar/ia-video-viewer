import { useState } from "react";

export default function Reviews(props) {
  const [getState,setState] = useState({ showReviews : false });
  let buttonText = (getState.showReviews) ? 'Hide Reviews' : 'Show Reviews';
  const handleButton = (event) => {
    event.preventDefault();
    setState({ showReviews: !getState.showReviews });
  };
  const showHideReviews = () => {
    if (getState.showReviews) {
      return Object.entries(props.reviews).map((value, i) => (
          <ReviewItem key={value[1].review_id} {...value[1]} />
        ));
    } else {
      return null;
    }
  };
  if ((props.reviews !== undefined) && (props.reviews.length > 0)) {
    return(
      <section className={`reviews-list screen-section`}>
        <header className={`reviews-header section-header`}>
          <h2 className="title">Reviews ({props.reviews.length})</h2>
          <button className="button" onClick={handleButton}>{buttonText}</button>
        </header>
        {showHideReviews()}
      </section>
    );
  } else {
    return null;
  }
}

function ReviewItem(props) {
  let authorLink = `https://archive.org/details/%40${props.reviewer}`;
  let date = new Date(props.reviewdate);
  let dateFormat = date.toLocaleString('default', {  year: 'numeric', month: 'long', day: 'numeric' });
  return(
    <article className="review-item">
      <h5 className="review-title">{props.reviewtitle}</h5>
      <div className="review-meta">
        <span className="review-author">by <a href={authorLink}>{props.reviewer}</a> </span>
        <span className="review-date">on {dateFormat}</span>
      </div>
      <p className="review-content">
        {props.reviewbody}
      </p>
    </article>
  );
}