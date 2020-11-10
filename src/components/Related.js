import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { RelatedItems } from '../api/Metadata';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPhotoVideo, faEye } from '@fortawesome/free-solid-svg-icons'

export default function Related(props) {
  const [getRelatedItems, setRelatedItems] = useState({});
  useEffect(() => {    
    RelatedItems(props.id).then((data) => { 
      setRelatedItems(data.hits.hits);
    });
  }, [props.id]);
  return(

    <section className={`related-items screen-section`}>
      <div className="container">
        <header className={`related-header section-header`}>
          <h2 className="title">Related items</h2>
        </header>
        <CarouselProvider
          naturalSlideWidth={440}
          naturalSlideHeight={415}
          totalSlides={getRelatedItems.length}
          visibleSlides={3}
          infinite={true}
          isIntrinsicHeight
        >
          <Slider>
          {
            Object.entries(getRelatedItems).map((value, i) => (
              <Slide index={i} key={i}>
                <RelatedItem 
                    id={value[1]._id} 
                    title={value[1]._source.title} 
                    description={value[1]._source.description} 
                    downloads={value[1]._source.downloads} 
                    mediatype={value[1]._source.mediatype} 
                  />
                </Slide>
            ))
          }
          </Slider>
          <ButtonBack><FontAwesomeIcon icon={faChevronLeft} /> </ButtonBack>
          <ButtonNext><FontAwesomeIcon icon={faChevronRight} /></ButtonNext>
        </CarouselProvider>
      </div>
    </section>
  );
}

function RelatedItem(props) {
  let img_link = `https://archive.org/services/img/${props.id}`;
  let related_link = `/${props.id}`;
 return(
   <article className={`related-item card white`}>
      <Link to={related_link}>
        <figure className="card-image">
          <img src={img_link} alt={props.title} />
        </figure>
        <span className="card-content">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-meta">
            <span className="mediatype"><FontAwesomeIcon icon={faPhotoVideo} /> {props.mediatype}</span>
            <span className="downloads"><FontAwesomeIcon icon={faEye} /> {props.downloads}</span>
          </span>
        </span>
      </Link>
   </article>
 );
}