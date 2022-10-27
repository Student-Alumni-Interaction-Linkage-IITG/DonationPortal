import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './projects';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Navbar/>
        </header> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <Navbar/>
              </header>
              <Home/>
            </Route>
            <Route exact path="/projects.js">
              <Projects/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
