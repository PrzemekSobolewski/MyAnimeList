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

function App() {
  return (
    <div className="main-content">
      <Router>
        <Navbar/>
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
