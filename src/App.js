import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ReachMe from "./Components/ReachMe";
import Home from "./Pages/Home";
import MySkills from './Pages/MySkills';
import Projects from './Pages/MyProjects';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/myskills">
          <MySkills/>
        </Route>
        <Route exact path="/myprojects">
          <Projects/>
        </Route>
      </Switch>
      
      <ReachMe/>
      <Footer/>
    </Router>
  );
}

export default App;
