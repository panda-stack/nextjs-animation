import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import MenuBar from '../components/MenuBar';
import Robot from '../components/Robot';
import MainMenu from '../components/MainMenu';
import Animation_lottie from './lottie';
import {
  PageContainer,
  MainContentContainer,
} from '../components/MainMenu.components';
import { backgroundSound } from "../public/sounds";



class MainMenuPage extends Component {

  render() {
    return (
      <PageContainer>
        <MenuBar progressbar={false} transparent back={false} home={false} />

        <MainContentContainer>
          <Grid>
            <Grid.Column
              mobile="16"
              tablet="8"
              computer="8"
              largeScreen="5"
              widescreen="4"
            >
              <MainMenu />
            </Grid.Column>
          </Grid>
        </MainContentContainer>
        <Animation_lottie/>
        <Robot />
      </PageContainer>
    );
  }
}

export default connect(state => state)(MainMenuPage);
