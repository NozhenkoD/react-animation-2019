import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
// In your render...

export default class ReactMotion extends Component {

  state = {
    height: 38,
    rotate: 0
  };
  animate = () => {
    const { height, rotate } = this.state;
    let newHeight = height;
    let newRotate = rotate;
    newHeight = height === 233 ? 38 : 233;
    newRotate = rotate === 720 ? 0 : 720;
    this.setState({ height: newHeight, rotate: newRotate });
  };
  render() {
    const { height, rotate } = this.state;
    return (
      <div className="App">
        <div style={styles.button} onClick={this.animate}>Animate</div>
        <Motion
          style={{ height: spring(height), rotate: spring(rotate) }}>
          {
            ({ height, rotate }) => <div style={styles.menu}>
              <img
                style={Object.assign({}, styles.img, { height, width: height, transform: `rotate(${rotate}deg)`},  )}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnouqUqRgcy9V1gvUm3ug3Sbia82ca_-MqFGBpUkedw6Sc-P3"
                onClick={() => this.animate()}
              />
            </div>
          }
        </Motion>
      </div>
    );
  }
}



const styles = {
  img: {
    width: '100%',
    position: 'absolute',
    cursor: 'pointer',
  },
  menu: {
    overflow: 'hidden',
    width: 38,
    height: 38,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },
}
