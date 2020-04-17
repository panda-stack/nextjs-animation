import { Grid, Header, Button, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import BackgroundImage from '../public/images/mainmenu_background.png';

const PageContainer = styled.div`
  padding: 40px 2.3%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  min-height: 100%;
`;

const MainContentContainer = styled.div`
  padding-top: 0;
  padding-left: 2.6%;
  padding-right: 4.3%;
  margin-bottom: 0;
`;

const MainMenuHeader = styled.h1`
  font-size: 2.5em;
  color: white;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Audiowide", comic sans;

`;

const MainMenuContainer = styled(Container)`
  padding: 0 20px;
  position: relative;
  :first-child {
    margin-top: 0 !important;
  }
  :last-child {
    margin-bottom: 0 !important;
  }
`;

const MainMenuButton = styled(Button)`
  color: black !important;
  border-radius: 0 !important;
`;

const MainMenuButtonContainer = styled.div`
  border: 1px solid #fb861f;
  padding: 5px;
  margin-bottom: 30px;
  position: relative;
`;

const TopDecoration = styled.div`
  position: absolute;
  display: inline;
  left: 0;
  top: -10px;
  border-color: transparent transparent #fb861f transparent;
  border-width: 0px 0px 6px 6px;
  border-style: solid;
  height: 0;
  width: 33%;

  &.odd {
    left: 50%;
  }
`;

const BottomDecoration = styled.div`
  position: absolute;
  display: inline;
  right: 0;
  bottom: -10px;
  border-color: #fb861f transparent transparent transparent;
  border-width: 6px 6px 0 0;
  border-style: solid;
  height: 0;
  width: 33%;

  &.odd {
    right: 50%;
  }
`;

// https://stackoverflow.com/questions/5896351/how-to-background-a-div-without-the-padding-area
const HoriDecorationOutline = styled.div`
  position: absolute;
  display: inline;
  top: 0;
  width: 8px;
  height: 100%;
  // background: linear-gradient(#fb861f, #fb861f) bottom left/ 60% 1px,
  //   linear-gradient(#fb861f, #fb861f) 60% 0 / 40% 2px,
  //   linear-gradient(#fb861f, #fb861f) left/ 1px 60%,
  //   linear-gradient(#fb861f, #fb861f) right / 1px 80%, transparent;
  background-repeat: no-repeat !important;
  background-clip: content-box !important; // https://stackoverflow.com/questions/8835142/any-way-to-declare-a-size-partial-border-to-a-box

  &.left {
    left: 0;
    background: linear-gradient(#fb861f, #fb861f) left/ 1px 60%,
      linear-gradient(#fb861f, #fb861f) right / 1px 80%, transparent;
  }
  &.right {
    right: 0;
    background: linear-gradient(#fb861f, #fb861f) right/ 1px 60%,
      linear-gradient(#fb861f, #fb861f) left / 1px 80%, transparent;
  }
`;

const HoriDecorationBackground = styled.div`
  position: absolute;
  top: 30%;
  height: 40%;
  // width: calc(100% - 6px); //https://stackoverflow.com/a/14685747/9234721
  width: 100%;
  background: #fb861f;
`;

const LeftDecoration = props => (
  <HoriDecorationOutline className="left" {...props}>
    <HoriDecorationBackground />
  </HoriDecorationOutline>
);

const RightDecoration = props => (
  <HoriDecorationOutline className="right" {...props}>
    <HoriDecorationBackground />
  </HoriDecorationOutline>
);

export {
  PageContainer,
  MainContentContainer,
  MainMenuHeader,
  MainMenuContainer,
  MainMenuButton,
  MainMenuButtonContainer,
  TopDecoration,
  BottomDecoration,
  LeftDecoration,
  RightDecoration,
};
