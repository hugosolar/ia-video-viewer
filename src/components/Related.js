import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { RelatedItems } from '../api/Metadata';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Related(props) {
  const [getRelatedItems, setRelatedItems] = useState({});
  useEffect(() => {    
    RelatedItems(props.id).then((data) => { 
      setRelatedItems(data.hits.hits);
    });
  }, []);
  return(
    <section className="related-items">
      <header class="reviews-header">
        <h2 class="title">Related items</h2>
      </header>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={getRelatedItems.length}
        visibleSlides={3}
        infinite={true}
      >
        <Slider>
        {
          Object.entries(getRelatedItems).map((value, i) => (
            <Slide index={i}>
              <RelatedItem 
                  key={value[1]._id} 
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </section>
  );
}

function RelatedItem(props) {
  let img_link = `https://archive.org/services/img/${props.id}`;
  let related_link = `/${props.id}`;
 return(
   <article className="related-item card">
      <Link to={related_link}>
        <figure className="card-image">
          <img src={img_link} alt={props.title} />
        </figure>
        <span className="card-content">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-meta">
            <span className="mediatype">{props.mediatype}</span>
            <span className="downloads">{props.downloads}</span>
          </span>
        </span>
      </Link>
   </article>
 );
}