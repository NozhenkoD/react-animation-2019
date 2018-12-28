import React, { Component, Fragment } from 'react';
// import ReactTransitionGroup from './pages/ReactTransitionGroup';
// import ReactAnimations from './pages/ReactAnimations';
// import ReactMotion from './pages/ReactMotion';
import ExampleCss from './pages/ExampleCss';
import "antd/dist/antd.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<div className="react-transition-group">*/}
          {/*<ReactTransitionGroup />*/}
        {/*</div>*/}
        {/*<ReactAnimations />*/}
        {/*<ReactMotion />*/}
        <ExampleCss />
      </Fragment>
    );
  }
}

export default App;
