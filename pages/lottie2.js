import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/animate_json/01_robot_flying.json";
import './lottie.css';

export default class LottieControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            top: -100,
            right: 100,
            dirX: 1,
            dirY: 1
        };
    }

    tick(dx, dy) {        
        let x, y;
        if(this.state.top < document.documentElement.offsetHeight / 2 - 300 && this.state.dirY == 1) {
            y = dy;
        }
        if(this.state.top > -100 && this.state.dirY == -1) {
            y = -dy;
        }
        if(this.state.top <= -100 && this.state.dirY == -1) {
            y = dy;
            this.setState(state => ({
                dirY: 1
            }))
        }
        if(this.state.top >= document.documentElement.offsetHeight / 2 - 300 && this.state.dirY == 1) {
            y = -dy;
            this.setState(state => ({
                dirY: -1
            }))
        }
        if(this.state.right < document.documentElement.offsetWidth / 2 - 300 && this.state.dirX == 1) {
            x = dx;
        }
        if(this.state.right > -100 && this.state.dirX == -1) {
            x = -dx;
        }
        if(this.state.right <= -100 && this.state.dirX == -1) {
            x = dx;
            this.setState(state => ({
                dirX: 1
            }))
        }
        if(this.state.right >= document.documentElement.offsetWidth / 2 - 300 && this.state.dirX == 1) {
            x = -dx;
            this.setState(state => ({
                dirX: -1
            }))
        }
        this.setState(state => ({
            top: state.top + y,
            right: state.right + x
        }));
    }

    componentDidMount() {
        let dx = Math.random() * 2 + 3;
        let dy = Math.random() * 2 + 3;
        console.log("document-height",document.documentElement.offsetHeight);
        console.log("document-width",document.documentElement.offsetWidth);
        this.interval = setInterval(() => this.tick(dx, dy), 30);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: JSON.parse(animationData),
        };

        const divStyle = {
            top: this.state.top,
            right: this.state.right,
        };

        return (
            <div className="lottie" style={divStyle}>
                <Lottie
                    options={defaultOptions}
                    height={300}
                    width={300}
                    top={this.state.top}
                    left={this.state.left}
                />
            </div>
        );
    }
}