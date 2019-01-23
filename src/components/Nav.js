import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { MAIN_PATH } from '../constants/common';

import './styles.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header-nav">
            <Link className="header-nav__item" to={`/${MAIN_PATH}`}>ReactAnimations</Link>
            <Link className="header-nav__item" to={`/${MAIN_PATH}/ReactReveal`}>ReactReveal</Link>
            <Link className="header-nav__item" to={`/${MAIN_PATH}/ExampleCss`}>ExampleCss</Link>
            <Link className="header-nav__item" to={`/${MAIN_PATH}/ReactTransitionGroup`}>ReactTransitionGroup</Link>
            <Link className="header-nav__item" to={`/${MAIN_PATH}/AntDesign`}>AntDesign</Link>
          </div>
          <a href="https://github.com/nozhenkoD/react-animation-2019" className="header__link">GitHub</a>
        </header>
      </Fragment>
    );
  }
}

export default App;
