import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactTransitionGroup from './pages/ReactTransitionGroup';
import ReactAnimations from './pages/ReactAnimations';
import ReactMotion from './pages/ReactMotion';
import ExampleCss from './pages/ExampleCss';
import ReactReveal from './pages/ReactReveal';
import AntDesign from './pages/AntDesign';
import "antd/dist/antd.css";
import './App.css';
import Nav from './components/Nav';

const MAIN_PATH = 'react-animation-2019';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<div className="react-transition-group">*/}
          {/*<ReactTransitionGroup />*/}
        {/*</div>*/}
        {/*<ReactAnimations />*/}
        {/*<ReactMotion />*/}
        {/*<ExampleCss />*/}
        {/*<ReactReveal />*/}
        <Router>
          <div className="main-content">
            <Nav />
            <Route path={`/${MAIN_PATH}/`} exact component={ReactAnimations} />
            <Route path={`/${MAIN_PATH}/ReactReveal`} component={ReactReveal} />
            <Route path={`/${MAIN_PATH}/ExampleCss`} component={ExampleCss} />
            <Route path={`/${MAIN_PATH}/ReactTransitionGroup`} component={ReactTransitionGroup} />
            <Route path={`/${MAIN_PATH}/AntDesign`} component={AntDesign} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
