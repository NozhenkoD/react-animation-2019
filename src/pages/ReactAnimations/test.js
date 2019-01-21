import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import './style.css';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default class ReactAnimations extends Component {
  render() {
    return (
      <Bounce><h1>Hello Animation Bounce</h1></Bounce>
    );
  }
}
