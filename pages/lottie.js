import React from 'react';
import Lottie from 'react-lottie';
import animationData1 from '../public/animate_json/01_robot_flying.json';
import * as animationData2 from "../public/animate_json/02_robot_talking.json";
import './lottie.css';
import { robot } from './script';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: 100,
      right: 0,
    };
  }

  componentDidMount() {
    robot();
  }

  render() {    

    const defaultOptions1 = {
      loop: true,
      autoplay: true,
      animationData: JSON.parse(animationData1),
    };

    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: animationData2.default,
    };

    const defaultOption = [defaultOptions1, defaultOptions2];

    const divStyle = {
      bottom: this.state.bottom,
      right: this.state.right,
    };

    const id = ['robot1', 'robot2'];

    return (
      <div>
        <div style={divStyle} id={id[0]}>
          <Lottie options={defaultOption[0]} height="100%" width="100%" />
        </div>
        <div style={divStyle} id={id[1]}>
          <Lottie options={defaultOption[1]} height="100%" width="100%" />
        </div>
      </div>
    );
  }
}
