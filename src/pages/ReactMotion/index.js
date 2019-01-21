import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
// In your render...

export default class ReactMotion extends Component {

  state = {
    top: 0,
    opacity: .5,
  };
  animate = () => {
    const { top, opacity } = this.state;
    let newTop = top;
    let newOpacity = opacity;
    newTop = top === 0 ? 30 : 0;
    console.log('newTop', newTop);
    newOpacity = opacity === 1 ? .5 : 1;
    this.setState({ top: newTop, opacity: newOpacity });
  };
  componentDidMount() {
    this.animate();
  }
  render() {
    const { top, opacity } = this.state;
    return (
      <div style={styles.app}>
        <div style={styles.button} onClick={this.animate}>Animate</div>
        <Motion
          style={{
            height: spring(top, { stiffness: 100 }),
            opacity: spring(opacity, { stiffness: 100})
          }}>
          {
            ({ height, opacity }) => <div>
              <h1
                style={Object.assign({}, styles.title, { transform: `translateX(${top})` }) }
              >Hello</h1>
            </div>
          }
        </Motion>
      </div>
    );
  }
}



const styles = {
  app: {
    width: '100%',
    height: 500,
    backgroundImage: 'url(https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundSize: 'cover',
  },
  title: {
    textAlign: 'center',
    transition: '.3s',
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
