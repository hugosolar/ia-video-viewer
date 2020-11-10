
export default function MetaList(props) {
  return(
    <div className={`term-list content`}>
      {
        Object.keys(props.metadata).map((key,i) => (
          <MetaItem key={i} term={key} description={props.metadata[key]} />
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
      case 'licenseurl':
        if (value.indexOf('creativecommons')) {
          if (value.indexOf('publicdomain')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons CC0 Universal Public Domain Dedication</a>
          }
          if (value.indexOf('/by/')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons Attribution</a>
          }
          if (value.indexOf('/by-sa/')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike</a>
          }
          if (value.indexOf('/by-nc-sa/')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike</a>
          }
          if (value.indexOf('/by-nc-nd/')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial-NoDerivatives</a>
          }
          if (value.indexOf('/by-nd/')) {
            description = <a href={value} target="_blank" rel="noreferrer">Creative Commons Attribution-NoDerivatives</a>
          }
        } else {
          description = <a href={value} target="_blank" rel="noreferrer">{value}</a>
        }
      break;
      case 'date': 
        let link = `https://archive.org/search.php?query=date:${value}`;
        description = <a href={link} target="_blank" rel="noreferrer">{value}</a>
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