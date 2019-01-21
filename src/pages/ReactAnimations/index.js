import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  bounce,
  bouceIn,
  bouceOut,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  hinge,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  rubberBand,
  shake,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
} from 'react-animations';
import Item from './item';
import './style.css';

// import { bounce } from 'react-animations'
// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
// <Bounce><h1>Hello Animation Bounce</h1></Bounce>

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const BounceIn = styled.div`animation: 2s ${keyframes`${bouceIn}`} infinite`;
const BouceOut = styled.div`animation: 2s ${keyframes`${bouceOut}`} infinite`;
const BounceInDown = styled.div`animation: 2s ${keyframes`${bounceInDown}`} infinite`;
const BounceInLeft = styled.div`animation: 2s ${keyframes`${bounceInLeft}`} infinite`;
const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`} infinite`;
const BounceInUp = styled.div`animation: 2s ${keyframes`${bounceInUp}`} infinite`;
const BounceOutDown = styled.div`animation: 2s ${keyframes`${bounceOutDown}`} infinite`;
const BounceOutLeft = styled.div`animation: 2s ${keyframes`${bounceOutLeft}`} infinite`;
const BounceOutRight = styled.div`animation: 2s ${keyframes`${bounceOutRight}`} infinite`;
const BounceOutUp = styled.div`animation: 2s ${keyframes`${bounceOutUp}`} infinite`;
const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} infinite`;
const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`} infinite`;
const FadeInDownBig = styled.div`animation: 2s ${keyframes`${fadeInDownBig}`} infinite`;
const FadeInLeft = styled.div`animation: 2s ${keyframes`${fadeInLeft}`} infinite`;
const FadeInLeftBig = styled.div`animation: 2s ${keyframes`${fadeInLeftBig}`} infinite`;
const FadeInRight = styled.div`animation: 2s ${keyframes`${fadeInRight}`} infinite`;
const FadeInRightBig = styled.div`animation: 2s ${keyframes`${fadeInRightBig}`} infinite`;
const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeInUp}`} infinite`;
const FadeInUpBig = styled.div`animation: 2s ${keyframes`${fadeInUpBig}`} infinite`;
const FadeOut = styled.div`animation: 2s ${keyframes`${fadeOut}`} infinite`;
const FadeOutDown = styled.div`animation: 2s ${keyframes`${fadeOutDown}`} infinite`;
const FadeOutDownBig = styled.div`animation: 2s ${keyframes`${fadeOutDownBig}`} infinite`;
const FadeOutLeft = styled.div`animation: 2s ${keyframes`${fadeOutLeft}`} infinite`;
const FadeOutLeftBig = styled.div`animation: 2s ${keyframes`${fadeOutLeftBig}`} infinite`;
const FadeOutRight = styled.div`animation: 2s ${keyframes`${fadeOutRight}`} infinite`;
const FadeOutRightBig = styled.div`animation: 2s ${keyframes`${fadeOutRightBig}`} infinite`;
const FadeOutUp = styled.div`animation: 2s ${keyframes`${fadeOutUp}`} infinite`;
const FadeOutUpBig = styled.div`animation: 2s ${keyframes`${fadeOutUpBig}`} infinite`;
const Flash = styled.div`animation: 2s ${keyframes`${flash}`} infinite`;
const Flip = styled.div`animation: 2s ${keyframes`${flip}`} infinite`;
const FlipInX = styled.div`animation: 2s ${keyframes`${flipInX}`} infinite`;
const FlipInY = styled.div`animation: 2s ${keyframes`${flipInY}`} infinite`;
const FlipOutX = styled.div`animation: 2s ${keyframes`${flipOutX}`} infinite`;
const FlipOutY = styled.div`animation: 2s ${keyframes`${flipOutY}`} infinite`;
const HeadShake = styled.div`animation: 2s ${keyframes`${headShake}`} infinite`;
const Hinge = styled.div`animation: 2s ${keyframes`${hinge}`} infinite`;
const Jello = styled.div`animation: 2s ${keyframes`${jello}`} infinite`;
const LightSpeedIn = styled.div`animation: 2s ${keyframes`${lightSpeedIn}`} infinite`;
const LightSpeedOut = styled.div`animation: 2s ${keyframes`${lightSpeedOut}`} infinite`;
const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;
const RollIn = styled.div`animation: 2s ${keyframes`${rollIn}`} infinite`;
const RollOut = styled.div`animation: 2s ${keyframes`${rollOut}`} infinite`;
const RotateIn = styled.div`animation: 2s ${keyframes`${rotateIn}`} infinite`;
const RotateInDownLeft = styled.div`animation: 2s ${keyframes`${rotateInDownLeft}`} infinite`;
const RotateInDownRight = styled.div`animation: 2s ${keyframes`${rotateInDownRight}`} infinite`;
const RotateInUpLeft = styled.div`animation: 2s ${keyframes`${rotateInUpLeft}`} infinite`;
const RotateInUpRight = styled.div`animation: 2s ${keyframes`${rotateInUpRight}`} infinite`;
const RotateOut = styled.div`animation: 2s ${keyframes`${rotateOut}`} infinite`;
const RotateOutDownLeft = styled.div`animation: 2s ${keyframes`${rotateOutDownLeft}`} infinite`;
const RotateOutDownRight = styled.div`animation: 2s ${keyframes`${rotateOutDownRight}`} infinite`;
const RotateOutUpLeft = styled.div`animation: 2s ${keyframes`${rotateOutUpLeft}`} infinite`;
const RotateOutUpRight = styled.div`animation: 2s ${keyframes`${rotateOutUpRight}`} infinite`;
const RubberBand = styled.div`animation: 2s ${keyframes`${rubberBand}`} infinite`;
const Shake = styled.div`animation: 2s ${keyframes`${shake}`} infinite`;
const SlideInDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} infinite`;
const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`} infinite`;
const SlideInRight = styled.div`animation: 2s ${keyframes`${slideInRight}`} infinite`;
const SlideInUp = styled.div`animation: 2s ${keyframes`${slideInUp}`} infinite`;
const SlideOutDown = styled.div`animation: 2s ${keyframes`${slideOutDown}`} infinite`;
const SlideOutLeft = styled.div`animation: 2s ${keyframes`${slideOutLeft}`} infinite`;
const SlideOutRight = styled.div`animation: 2s ${keyframes`${slideOutRight}`} infinite`;
const SlideOutUp = styled.div`animation: 2s ${keyframes`${slideOutUp}`} infinite`;
const Swing = styled.div`animation: 2s ${keyframes`${swing}`} infinite`;
const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;
const Wobble = styled.div`animation: 2s ${keyframes`${wobble}`} infinite`;
const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`} infinite`;
const ZoomInDown = styled.div`animation: 2s ${keyframes`${zoomInDown}`} infinite`;
const ZoomInLeft = styled.div`animation: 2s ${keyframes`${zoomInLeft}`} infinite`;
const ZoomInRight = styled.div`animation: 2s ${keyframes`${zoomInRight}`} infinite`;
const ZoomInUp = styled.div`animation: 2s ${keyframes`${zoomInUp}`} infinite`;
const ZoomOut = styled.div`animation: 2s ${keyframes`${zoomOut}`} infinite`;
const ZoomOutDown = styled.div`animation: 2s ${keyframes`${zoomOutDown}`} infinite`;
const ZoomOutLeft = styled.div`animation: 2s ${keyframes`${zoomOutLeft}`} infinite`;
const ZoomOutRight = styled.div`animation: 2s ${keyframes`${zoomOutRight}`} infinite`;
const ZoomOutUp = styled.div`animation: 2s ${keyframes`${zoomOutUp}`} infinite`;


class ReactAnimations extends Component {

  render() {
    return (
      <Fragment>
        <div className="wrapper-react-animations">
          <Bounce><h1>Hello Animation Bounce</h1></Bounce>
          {/*/!*<Bounce><Item name="Bounce" /></Bounce>*!/*/}
          {/*/!*<BounceInDown><Item name="BounceInDown" /></BounceInDown>*!/*/}
          {/*/!*<BounceInLeft><Item name="BounceInDown" /></BounceInLeft>*!/*/}
          {/*/!*<BounceInRight><Item name="bounceInRight" /></BounceInRight>*!/*/}
          {/*/!*<BounceInUp><Item name="bounceInUp" /></BounceInUp>*!/*/}
          {/*/!*<BounceOutDown><Item name="bounceOutDown" /></BounceOutDown>*!/*/}
          {/*/!*<BounceOutLeft><Item name="bounceOutLeft" /></BounceOutLeft>*!/*/}
          {/*/!*<BounceOutRight><Item name="bounceOutRight" /></BounceOutRight>*!/*/}
          {/*/!*<BounceOutUp><Item name="bounceOutUp" /></BounceOutUp>*!/*/}
          {/*<FadeIn><Item name="fadeIn" /></FadeIn>*/}
          {/*<FadeInDown><Item name="fadeInDown" /></FadeInDown>*/}
          {/*/!*<FadeInDownBig><Item name="fadeInDownBig" /></FadeInDownBig>*!/*/}
          {/*/!*<FadeInLeft><Item name="fadeInLeft" /></FadeInLeft>*!/*/}
          {/*/!*<FadeInLeftBig><Item name="fadeInLeftBig" /></FadeInLeftBig>*!/*/}
          {/*/!*<FadeInRight><Item name="fadeInRight" /></FadeInRight>*!/*/}
          {/*/!*<FadeInRightBig><Item name="fadeInRightBig" /></FadeInRightBig>*!/*/}
          {/*/!*<FadeInUp><Item name="fadeInUp" /></FadeInUp>*!/*/}
          {/*/!*<FadeInUpBig><Item name="fadeInUpBig" /></FadeInUpBig>*!/*/}
          {/*/!*<FadeOut><Item name="fadeOut" /></FadeOut>*!/*/}
          {/*/!*<FadeOutDown><Item name="fadeOutDown" /></FadeOutDown>*!/*/}
          {/*/!*<FadeOutDownBig><Item name="fadeOutDownBig" /></FadeOutDownBig>*!/*/}
          {/*/!*<FadeOutLeft><Item name="fadeOutLeft" /></FadeOutLeft>*!/*/}
          {/*/!*<FadeOutLeftBig><Item name="fadeOutLeftBig" /></FadeOutLeftBig>*!/*/}
          {/*/!*<FadeOutRight><Item name="fadeOutRight" /></FadeOutRight>*!/*/}
          {/*/!*<FadeOutRightBig><Item name="fadeOutRightBig" /></FadeOutRightBig>*!/*/}
          {/*/!*<FadeOutUp><Item name="fadeOutUp" /></FadeOutUp>*!/*/}
          {/*/!*<FadeOutUpBig><Item name="fadeOutUpBig" /></FadeOutUpBig>*!/*/}
          {/*<Flash><Item name="flash" /></Flash>*/}
          {/*/!*<Flip><Item name="flip" /></Flip>*!/*/}
          {/*<FlipInX><Item name="flipInX" /></FlipInX>*/}
          {/*/!*<FlipInY><Item name="flipInY" /></FlipInY>*!/*/}
          {/*/!*<FlipOutX><Item name="flipOutX" /></FlipOutX>*!/*/}
          {/*/!*<FlipOutY><Item name="flipOutY" /></FlipOutY>*!/*/}
          {/*<HeadShake><Item name="headShake" /></HeadShake>*/}
          {/*<Hinge><Item name="hinge" /></Hinge>*/}
          {/*<Jello><Item name="jello" /></Jello>*/}
          {/*/!*<LightSpeedIn><Item name="lightSpeedIn" /></LightSpeedIn>*!/*/}
          {/*/!*<LightSpeedOut><Item name="lightSpeedOut" /></LightSpeedOut>*!/*/}
          {/*<Pulse><Item name="pulse" /></Pulse>*/}
          {/*<RollIn><Item name="rollIn" /></RollIn>*/}
          {/*/!*<RollOut><Item name="rollOut" /></RollOut>*!/*/}
          {/*/!*<RotateIn><Item name="rotateIn" /></RotateIn>*!/*/}
          {/*<RotateInDownLeft><Item name="rotateInDownLeft" /></RotateInDownLeft>*/}
          {/*<RotateInDownRight><Item name="rotateInDownRight" /></RotateInDownRight>*/}
          {/*/!*<RotateOut><Item name="rotateOut" /></RotateOut>*!/*/}
          {/*/!*<RotateOutDownLeft><Item name="rotateOutDownLeft" /></RotateOutDownLeft>*!/*/}
          {/*/!*<RotateOutDownRight><Item name="rotateOutDownRight" /></RotateOutDownRight>*!/*/}
          {/*/!*<RotateOutUpLeft><Item name="rotateOutUpLeft" /></RotateOutUpLeft>*!/*/}
          {/*/!*<RotateOutUpRight><Item name="rotateOutUpRight" /></RotateOutUpRight>*!/*/}
          {/*<RubberBand><Item name="rubberBand" /></RubberBand>*/}
          {/*<Shake><Item name="shake" /></Shake>*/}
          {/*<SlideInDown><Item name="slideInDown" /></SlideInDown>*/}
          {/*/!*<SlideInLeft><Item name="slideInLeft" /></SlideInLeft>*!/*/}
          {/*/!*<SlideInRight><Item name="slideInRight" /></SlideInRight>*!/*/}
          {/*/!*<SlideInUp><Item name="slideInUp" /></SlideInUp>*!/*/}
          {/*/!*<SlideOutDown><Item name="slideOutDown" /></SlideOutDown>*!/*/}
          {/*/!*<SlideOutLeft><Item name="slideOutLeft" /></SlideOutLeft>*!/*/}
          {/*/!*<SlideOutRight><Item name="slideOutRight" /></SlideOutRight>*!/*/}
          {/*/!*<SlideOutUp><Item name="slideOutUp" /></SlideOutUp>*!/*/}
          {/*<Swing><Item name="swing" /></Swing>*/}
          {/*<Tada><Item name="tada" /></Tada>*/}
          {/*<Wobble><Item name="wobble" /></Wobble>*/}
          {/*<ZoomIn><Item name="zoomIn" /></ZoomIn>*/}
          {/*/!*<ZoomInDown><Item name="zoomInDown" /></ZoomInDown>*!/*/}
          {/*/!*<ZoomInLeft><Item name="zoomInLeft" /></ZoomInLeft>*!/*/}
          {/*/!*<ZoomInRight><Item name="zoomInRight" /></ZoomInRight>*!/*/}
          {/*/!*<ZoomInUp><Item name="zoomInUp" /></ZoomInUp>*!/*/}
          {/*<ZoomOut><Item name="zoomOut" /></ZoomOut>*/}
          {/*/!*<ZoomOutDown><Item name="zoomOutDown" /></ZoomOutDown>*!/*/}
          {/*/!*<ZoomOutLeft><Item name="zoomOutLeft" /></ZoomOutLeft>*!/*/}
          {/*/!*<ZoomOutRight><Item name="zoomOutRight" /></ZoomOutRight>*!/*/}
          {/*/!*<ZoomOutUp><Item name="zoomOutUp" /></ZoomOutUp>*!/*/}
        </div>
      </Fragment>
    );
  }



}

export default ReactAnimations;
