import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

const RobotPlayGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const RobotContainer = styled.div`
  z-index: 10;
  position: fixed;
  right: 41px;
  bottom: 10px;
`;

const RobotGroup = styled.div`
  position: relative;
`;

const SpeechBubble = styled.div`
  position: absolute;
  left: -180px;
  top: -60px;
  width: 200px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50px;
  font-family: "Audiowide", comic sans;
  left: 50px;
`;

export default class Robot extends Component {
  render() {
    return (
      <RobotContainer>
        <RobotGroup>
          <Image src="/images/robot_merged.png" />
          <SpeechBubble>
            <Image fluid src="/images/speech_bubble.png" />
            <TextBox>
              <p>I'm a robot!</p>
              <p>Blah blah blah...</p>
            </TextBox>
          </SpeechBubble>
        </RobotGroup>
      </RobotContainer>
    );
  }
}
