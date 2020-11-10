
export default function MetaList(props) { 
  return(
    <div className={`term-list content`}>
      {
        Object.keys(props.metadata).map((key,i) => (
          <MetaItem term={key} description={props.metadata[key]} />
        ))
      }
    </div>
  );
}
const filterDescription = (key, value) => {
  let description = [];
  switch (key) {
    case 'collection':
      if (Array.isArray(value)) {
        value.forEach((content) => { 
          let link = `https://archive.org/details/${content}`;
          description.push( <a href={link} target="_blank" rel="noreferrer">{content}</a> );
        });
      } else {
        description = value;
      }
      break;
      case 'description':

      break;
      case 'subject':
        let testValue = value.split(';');
        if (Array.isArray(testValue)) {
          testValue.forEach((content) => {
            let query = `subject:"${content}"`;
            let link = `https://archive.org/search.php?query=${encodeURI(query)}`;
            description.push( <a href={link} target="_blank" rel="noreferrer">{content}</a> );
          });
        }
      break;
      default:
        if (Array.isArray(value)) {
            description = value.join(', ');
        } else { 
          description = value;
        }
      break;
  }
  return description;
};
function MetaItem(props) {  
  let filteredDescription = filterDescription(props.term, props.description);
  //let filteredDescription = props.description;
  if (props.term !== 'description') {
    return(
      <dl className="term-item">
        <dt>{props.term}</dt>
        <dd>{filteredDescription}</dd>
      </dl>
    );
  } else {
    return false;
  }
}