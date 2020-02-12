import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute.js';
import HomePage from './HomePage/HomePage.js';
import LoginPage  from './LoginPage/LoginPage.js';
//import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs.js';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import cusPage from './CustomerPage/cusPage';
import userPage from './UserPage/userPage';
import PjPage from './PJPage/PjPage'
import SuperviorPage from './SuperviorPage/SuperviorPage';
import AddPage from './AddPage/AddPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <Router>
          <div>
            <PrivateRoute exact path='/' component={ HomePage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/projects" component={ ProjectsPage } />
            <Route path="/home" component={ HomePage } />
            <Route path="/supervior" component={ SuperviorPage } />
            <Route path="/customer" component={ cusPage } />
            <Route path="/user" component={ userPage } />
            <Route path="/super" component={ ProjectsPage } />
            <Route path="/pj" component={ PjPage } />
            <Route path="/add" component={AddPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;