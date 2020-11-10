
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
      case 'licenseurl':
        switch (value) {
          case 'http://creativecommons.org/licenses/publicdomain/':
            description = <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer">Creative Commons CC0 Universal Public Domain Dedication</a>
            break;
          case 'https://creativecommons.org/licenses/by/4.0/':
            description = <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution 4.0 International</a>
            break;
          case 'http://creativecommons.org/licenses/by-sa/4.0/':
            description = <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 International</a>
            break;
          case 'https://creativecommons.org/licenses/by-nc/4.0':
            description = <a href="https://creativecommons.org/licenses/by-nc/4.0" target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial 4.0 International</a>
            break;
          case 'https://creativecommons.org/licenses/by-nc-sa/4.0':
            description = <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</a>
            break;
          case 'https://creativecommons.org/licenses/by-nc-nd/4.0':
            description = <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>
            break;
          case 'https://creativecommons.org/licenses/by-nd/4.0':
            description = <a href="https://creativecommons.org/licenses/by-nd/4.0" target="_blank" rel="noreferrer">Creative Commons Attribution-NoDerivatives 4.0 International</a>
            break;
          case 'https://creativecommons.org/publicdomain/zero/1.0/':
            description = <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer">Creative Commons CC0 Universal Public Domain Dedication</a>
            break;
          default:
            description = <a href={value}>{value}</a>
            break;
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
      case 'licenseurl':

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