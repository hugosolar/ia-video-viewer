export default function VideoEmbed(props) {
  const src = `https://archive.org/embed/${props.id}`;
  const width = '100%';
  const height = '500px';
  return (
    <div className="container">
      <section className={`responsive-embed embed-responsive-16by9`}>
        <iframe className="video-iframe" title={props.id} src={src} width={width} height={height} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen ></iframe>
      </section>
    </div>
  );
}