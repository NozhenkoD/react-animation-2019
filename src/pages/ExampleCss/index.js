import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.css';

export default class ExampleCss extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper" >
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
