import '../assets/scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1 className="title">Internet Archive Viewer</h1>
            <h3 className="subtitle">You may one to try one of this options below:</h3>
            <div className="container">
              <ul>
                <li>
                  <Link to="/InformationM">Information Machine, The</Link>
                </li>
                <li>
                  <Link to="/FinalFantasy2_356">Final Fantasy II (SNES) - 3:56 - Kevin Juang</Link>
                </li>
                <li>
                  <Link to="/electricsheep-flock-244-32500-3">electricsheep-flock-244-32500-3</Link>
                </li>
              </ul>
            </div>
          </div>
        </Route>
        <Route path="/:id" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
