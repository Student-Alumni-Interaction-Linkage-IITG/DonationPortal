import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from '../src/Pages/projects-page/projects';
import Projectdetail from './Pages/projectdetailspage/projectdetail';
import MyProfile from './Pages/profile/myProfile';
import Error from'./Pages/Error/Error'
import FAQs from'./Pages/FAQs/FAQs'
import Gsproject_putiing from './Pages/gsdashboard/Gsproject_putiing';
import GSProjectdetail from './Pages/gsprojectdetailpage/gsprojectdetail';
import Login from './Pages/login/login';
import Signup from './Pages/login/signup';
import Close_project from './Pages/gsdashboard/Close_project';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user) {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path='/'>
              <Home/>
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/signup'>
                <Signup/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }else if(user && user.designation=='GS'){
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Gsproject_putiing/>
              </Route>
              <Route exact path='/gsprojectdetai'>
                <GSProjectdetail />
              </Route>
              <Route exact path='/close_events'>
                <Close_project/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  else{
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/projects">
                <Projects/>
              </Route>
              <Route exact path="/myprofile">
                <MyProfile />
              </Route>
              <Route exact path="/projectdetail">
                <Projectdetail/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <Signup/>
              </Route>
              <Route exact path='/gsprojectdetail'>
                <GSProjectdetail />
              </Route>
              <Route exact path="/FAQs">
                <FAQs/>
              </Route>
              <Route exact path='/gsHome'>
                <Gsproject_putiing/>
              </Route>
              <Route exact path="*">
                <Error/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
