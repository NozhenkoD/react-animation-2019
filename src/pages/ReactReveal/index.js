import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';

export default class ReactReveal extends Component {

  render() {
    const animateList = [1,2,3,4,5];
    return (
      <Fragment>
        {animateList.map((item, key) => (
          <div style={styles.block} key={key}>
            <Fade top>
              <h1 style={styles.title}>{`block ${item}`}</h1>
            </Fade>
          </div>
        ))}
      </Fragment>
    );
  }
}

const styles = {
  block: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',
    borderBottom: '1px solid rgba(255,255,255,.2)'
  },
  title: {
    textAlign: 'center',
    fontSize: 100,
    color: '#fff',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100
  },
};
