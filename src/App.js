import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Search from './pages/search.js';
import Anime from './pages/anime.js';
import Navbar from './components/navbar.js';
import {MdMenu} from "react-icons/md";

const App = () => {
  const [rwdNavbarVisible, setRwdNavbarVisible] = useState(false);

  return (
    <div className="main-content">
      <Router>
        <MdMenu onClick={() => setRwdNavbarVisible(true)} className="rwd-show-nav"/>
        <Navbar  setVisible={setRwdNavbarVisible} visible={rwdNavbarVisible}/>
        <div onClick={() => setRwdNavbarVisible(false)} className={rwdNavbarVisible ? "content-shadow active" : "content-shadow"}></div>
        <div className="page-content">
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/anime/:id" component={Anime} />  
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

