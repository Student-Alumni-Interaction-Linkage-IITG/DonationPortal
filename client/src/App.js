import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/projects-page/projects';
import Projectdetail from './Pages/projectdetailspage/projectdetail';
import MyProfile from './Pages/profile/myProfile';
// <<<<<<< HEAD

import Gsproject_putiing from './Pages/gsdashboard/Gsproject_putiing';
import Login from './Pages/login/login';
import Signup from './Pages/login/signup';

// =======
// updates
// import Gsproject_putiing from './Pages/gsdashboard/Gsproject_putiing';
// import Login from './Pages/login/login';
// import Signup from './Pages/login/signup';
// updates
// >>>>>>> 87920aa3a508dcb05d88a20e1ee14c889c84e250
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
              <Home/>
            </Route>
            <Route exact path="/projects.js">
              <Projects/>
            </Route>
            <Route exact path="/myprofile.js">
              <MyProfile />
            </Route>
            <Route exact path="/projectdetail.js">
              <Projectdetail/>
            </Route>
{/* <<<<<<< HEAD */}

{/* ======= */}
{/* updates */}
{/* >>>>>>> 87920aa3a508dcb05d88a20e1ee14c889c84e250 */}
            <Route exact path="/login.js">
              <Login/>
            </Route>
            <Route exact path="/signup.js">
              <Signup/>
            </Route>
            <Route exact path="/abcd">
              <Gsproject_putiing/>
            </Route>
{/* <<<<<<< HEAD */}

{/* ======= */}
{/* updates */}
{/* >>>>>>> 87920aa3a508dcb05d88a20e1ee14c889c84e250 */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
