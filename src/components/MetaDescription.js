export default function MetaDescription(props) {
  let template = { __html: props.description };
  let thumbnailUrl = `https://archive.org/services/img/${props.id}`;
  let thumbnail = <figure className="meta-thumbnail"><img src={thumbnailUrl} alt={props.title} /></figure>
  return(
    <section className="meta-description">
      <header className="description-header">
      {thumbnail}
      <h3 className="title is-4">{props.title}</h3>
      </header>
      <div className="content" dangerouslySetInnerHTML={template} />
    </section>
  );
}