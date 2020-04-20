import Link from "next/link";
import React, { Component } from "react";
import {
  MainMenuContainer,
  MainMenuButton,
  MainMenuButtonContainer,
  LeftDecoration,
  TopDecoration,
  BottomDecoration,
  RightDecoration,
  MainMenuHeader
} from "./MainMenu.components";
import { click, hover } from "../public/sounds";
import { Animation_btn } from '../pages/script';


export default class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.clickAnimate = this.clickAnimate.bind(this);
  }

  clickAnimate(n) {
    Animation_btn(n);
  }

  render() {
    const buttons = [];
    for (let i = 0; i < 6; i += 1) {
      const oddOrEven = i % 2 ? "odd" : "even";
      const buttonColor = i % 2 ? "orange" : "yellow";
      buttons.push(
        <MainMenuButtonContainer
          key={`mainmenubutton${i}`}
          Container
          className={oddOrEven}
        >
          <TopDecoration className={oddOrEven} />
          <Link href=""
          >
            <MainMenuButton
              fluid
              color={buttonColor}
              style={{ fontFamily: "Audiowide, comic sans" }}
              className={oddOrEven}
              onMouseEnter={()=> {hover.play()}}
              // onClick={()=> click.play()}
              onClick = { () => this.clickAnimate(i) }
              id = {`btn${i}`}
            >
              Link Name {i}
            </MainMenuButton>
          </Link>
          <BottomDecoration className={oddOrEven} />
        </MainMenuButtonContainer>
      );
    }
    return (
      <>
        <MainMenuHeader>Main Menu</MainMenuHeader>
        <MainMenuContainer>
          <LeftDecoration />
          <RightDecoration />
          {buttons}
        </MainMenuContainer>
      </>
    );
  }
}
