import React from "react";
import Lottie from "react-lottie";
import animationData1 from "../public/animate_json/01_robot_flying.json";
import animationData2 from "../public/animate_json/01_robot_flying.json";
import './lottie.css';

export default class LottieControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            top: 0,
            right: 0,
            classNum: this.props.robotnum
        };
    }

    componentDidMount() {
        console.log("classNum = ", this.state.classNum)
    }

    render() {

        const animate = [
            animationData1,
            animationData2,
        ]

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: JSON.parse(animate[parseInt(this.state.classNum) - 1]),
        };

        const divStyle = {
            top: this.state.top,
            right: this.state.right,
        };

        const className = [
            'lottie1',
            'lottie2',
        ]

        return (            
            <div className={className[parseInt(this.state.classNum) - 1]} style={divStyle} id="robot">
                <Lottie
                    options={defaultOptions}
                    height="100%"
                    width="100%"
                    top={this.state.top}
                    left={this.state.left}
                />
            </div>
        );
    }
}