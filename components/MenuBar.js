import Link from "next/link";
import React, { Component } from "react";
import { Icon, Menu, Visibility, Dropdown } from "semantic-ui-react";
import ProgressNavBar from "./ProgressNavBar";
import {
  MenuContainer,
  MyMenu,
  Avatar,
  StatusMenu,
  RankStatus,
  ProgressStatus,
  HintStatus
} from "./MenuBar.components";
import { click, hover } from "../public/sounds";


export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarDropdownVisible: false
    };
  }

  render() {
    const { avatarDropdownVisible } = this.state;
    const {
      visibleVideo,
      transparent,
      progressbar,
      home,
      back,
      style
    } = this.props;
    return (
      <MenuContainer style={style}>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <MyMenu
            borderless
            inverted
            className={transparent ? "transparent" : undefined}
          >
            {/* <Menu.Item header>Project Name</Menu.Item> */}
            {back && (
              <Link href="/menu">
                <Menu.Item
                  as="a"
                  onClick={() => {
                    click.play();
                  }}
                  onMouseEnter={() => {
                    hover.play();
                  }}
                >
                  <Icon size="large" name="chevron circle left" />
                </Menu.Item>
              </Link>
            )}

            {home && (
              <Link href="/">
                <Menu.Item
                  as="a"
                  onClick={() => {
                    click.play();
                  }}
                  onMouseEnter={() => {
                    hover.play();
                  }}
                >
                  <Icon size="large" name="home" />
                </Menu.Item>
              </Link>
            )}

            {/* <Menu.Item> */}
            {progressbar && <ProgressNavBar visibleVideo={visibleVideo} />}

            {/* </Menu.Item> */}

            <Menu.Menu position="right">
              <Link href="/crater">
                <Menu.Item as="a"
                                onClick={()=> {click.play()}}
                                onMouseEnter={()=> {hover.play()}}
                
                >
                  <Icon size="large" name="question circle" />
                </Menu.Item>
              </Link>
              <Link href="/crater">
                <Menu.Item as="a"
                                onClick={()=> {click.play()}}
                                onMouseEnter={()=> {hover.play()}}
                
                >
                  <Icon size="large" name="setting" />
                </Menu.Item>
              </Link>

              <Dropdown
                trigger={<Avatar src="/images/avatar.png" />}
                className="link item"
                icon={false}
                onOpen={(evt, data) => {
                  this.setState({
                    avatarDropdownVisible: true
                  });
                  console.log("onOpen", data);
                }}
                onClose={(evt, data) => {
                  this.setState({
                    avatarDropdownVisible: false
                  });
                  console.log("onClose", data);
                }}
                onClick={()=> {click.play()}}
                onMouseEnter={()=> {hover.play()}}

              />
            </Menu.Menu>
          </MyMenu>

          {avatarDropdownVisible && (
            <StatusMenu>
              <RankStatus rank={3} />
              <HintStatus hint={3} />
              <ProgressStatus percent={30} />
            </StatusMenu>
          )}
        </Visibility>
      </MenuContainer>
    );
  }
}
