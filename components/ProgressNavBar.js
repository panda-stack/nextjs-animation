import React, { Component } from "react";
import { Menu, Label } from "semantic-ui-react";
import styled from "styled-components";
import { click, hover } from "../public/sounds";


const ProgressBar = styled(Menu.Item)`
  flex: 1 !important;

  div.progress-bar {
    // background-color: #1a1a1a;
    width: 100%;
    height: 30px;
    padding: 0 15%;
    margin: 50px 0;
    // border-radius: 5px;

    div.progress-item {
      display: inline-block;
      height: 100%;
      // border-radius: 3px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
      border: 4px solid white;
      transition: width 0.4s ease-in-out;
      cursor: pointer;
      position: relative;
      text-align: center;

      background-color: #34c2e3; // blue by default

      &:hover {
        box-shadow: 0 1px 10px #fff inset, 0 1px 0 #aaa;
      }

      &.stripes {
        background-size: 30px 30px;
        background-image: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        animation: animate-stripes 3s linear infinite;

        @keyframes animate-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 0;
          }
        }
      }

      &:first-child {
        border-radius: 20px 0 0 20px;
      }
      &:last-child {
        border-radius: 0 20px 20px 0;
      }
    }
  }
`;

const ProgressItemLabel = styled(Label)`
  text-align: center;
  position: absolute !important;
  width: fit-content;
  left: 0 !important;
  right: 0 !important;
  margin: 1.5em auto !important;
  display: block;
  z-index: 101;
`;

export default class ProgressNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressItems: [
        {
          title: "MCQ",
          color: "#a2dafc",
          popupStatus: false,
          locked: false
        },
        {
          title: "Option",
          color: "#7dcbfb",
          popupStatus: false,
          locked: true
        },
        {
          title: "Select",
          color: "#8ab3e1",
          popupStatus: false,
          locked: true
        },
        {
          title: "Video",
          color: "#73abd4",
          popupStatus: false,
          locked: false
        },
        {
          title: "Choice",
          color: "#5875a7",
          popupStatus: false,
          locked: false
        },
        {
          title: "Drag",
          color: "#49b5d4",
          popupStatus: false,
          locked: true
        }
      ]
    };
  }

  setToolTipState = (index, enable) => {
    const newStatus = {
      progressItems: []
    };
    const { progressItems } = this.state;
    for (let i = 0; i < progressItems.length; i += 1) {
      newStatus.progressItems.push({
        ...progressItems[i],
        popupStatus: false
      });
    }
    newStatus.progressItems[index].popupStatus = enable;
    this.setState(newStatus);
  };

  onEnterHandler = index => {
    this.setToolTipState(index, true);
  };

  onLeaveHandler = index => {
    this.setToolTipState(index, false);
  };

  render() {
    const { progressItems } = this.state;
    return (
      <ProgressBar>
        <div className="progress-bar">
          {progressItems.map((item, index) => (
            <div
              onClick={() => {
                click.play();
              }}
              onMouseEnter={() => {
                hover.play();
              }}
              key={item.title}
              className="progress-item blue stripes"
              style={{
                width: `${100 / progressItems.length}%`,
                backgroundColor: item.locked ? "gray" : undefined
              }}
              onMouseEnter={() => {
                this.onEnterHandler(index);
              }}
              onMouseLeave={() => {
                this.onLeaveHandler(index);
              }}
            >
              {item.popupStatus && (
                <ProgressItemLabel pointing>
                  {item.locked ? "Locked" : item.title}
                </ProgressItemLabel>
              )}
            </div>
          ))}
        </div>
      </ProgressBar>
    );
  }
}
