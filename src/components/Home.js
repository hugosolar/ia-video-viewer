import { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import MetadataApi from '../api/Metadata';
import VideoEmbed from './VideoEmbed';
import MetaList from './MetaElement';
import MetaDescription from './MetaDescription';
import Reviews from './Reviews';
import Related from './Related';

export default function Home(props) {
  const [getMetadata, setMetadata] = useState({});
  const [getDataReviews, setDataReviews] = useState({});
  let { id } = useParams();
  useEffect(() => {
    MetadataApi(id).then((data) => { 
      setMetadata(data.metadata); 
      setDataReviews(data.reviews);
    });
  }, [id]);
  return(
    <div className="Home">
      <section className="video-embed">
        <VideoEmbed id={id} />
      </section>
      <div className="container">   
        <div className="columns">
          <div className={`column description`}>
            <MetaDescription description={getMetadata.description} title={getMetadata.title} id={id} />
          </div>
          <div className={`column meta-list`}>
            <MetaList metadata={getMetadata} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Reviews reviews={getDataReviews} />
            <hr></hr>
          </div>
        </div>
      </div>
      <Related id={id} />
    </div>
  );
}