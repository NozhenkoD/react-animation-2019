import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.css';

export default class ExampleCss extends Component {
  handleClick() {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <div className="nav">
          <Icon className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
          <div className="nav__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis optio repellat sit unde voluptatum?
          </div>
        </div>
      </div>
    );
  }
}
