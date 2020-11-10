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
            <div className="has-text-centered">
              <h1 className="title">Internet Archive Viewer</h1>
              <h3 className="subtitle">You may one to try one of this options below:</h3>
              <div className="container">
                <div class={`columns is-centered`}>
                  <div className={`column is-4`}>
                    <ul class="link-list">
                      <li>
                        <Link to="/InformationM">Information Machine, The</Link>
                      </li>
                      <li>
                        <Link to="/FinalFantasy2_356">Final Fantasy II (SNES) - 3:56 - Kevin Juang</Link>
                      </li>
                      <li>
                        <Link to="/electricsheep-flock-244-32500-3">electricsheep-flock-244-32500-3</Link>
                      </li>
                      <li>
                        <Link to="/twitter-1293849600487546880">Cat Life 🐱 - Army cat marching!</Link>
                      </li>
                      <li>
                        <Link to="/pn006">Memorias de un Calabozo [PN006]</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/:id" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
