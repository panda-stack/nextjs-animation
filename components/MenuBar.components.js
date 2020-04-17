import React from 'react';
import { Image, Menu, Progress } from 'semantic-ui-react';
import styled from 'styled-components';

import RankIcon from '../public/images/icons/rank.png';
import HeartIcon from '../public/images/icons/heart.png';
import LightningIcon from '../public/images/icons/lightning.png';

const MyMenu = styled(Menu)`
  margin-bottom: 0 !important;
  font-size: 18px !important;
  border-radius: 1000px !important;
  border: 2px solid white !important;
  overflow: hidden !important;
  height: 75px !important;

  &.transparent {
    border: 0 solid transparent !important;
    background: transparent !important;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  z-index: 100;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  border: 4px solid white;
`;

const StatusMenu = styled.div`
  width: 300px;
  position: absolute;
  right: 30px;
  z-index: 110;
`;

const StatusMenuItem = styled.div`
  background: #008888;
  border: 1px solid white;
  color: white;
  padding: 20px;
  display: flex;

  div.status-icon {
    width: 15%;
    margin-right: 18px;
  }

  div.status-description {
    width: 85%;
    p.status-title {
      font-size: 12px;
    }
    div.status-content {
      font-size: 18px;
      display: flex;
      align-items: center;

      div.status-progress {
        flex: 1;
        div.progress {
          margin: 0 1em;
        }
      }
    }
  }
`;

const StatusItem = ({ icon, title, content }) => (
  <StatusMenuItem className="status-item">
    <div className="status-icon">
      <Image src={icon} />
    </div>
    <div className="status-description">
      <p className="status-title">{title}</p>
      <div className="status-content">{content}</div>
    </div>
  </StatusMenuItem>
);

const RankStatus = props => {
  const { rank } = props;
  const rankNames = ['Sergeant', 'Sergeant', 'Sergeant', 'Sergeant'];
  return <StatusItem icon={RankIcon} title="Rank" content={rankNames[rank]} />;
};

const HintStatus = ({ hint }) => (
  <StatusItem icon={HeartIcon} title="No. of hints left" content={hint} />
);

const ProgressStatus = ({ percent }) => {
  const content = (
    <>
      <div className="status-percent">{percent}%</div>
      <div className="status-progress">
        <Progress color="yellow" size="small" percent={percent} />
      </div>
    </>
  );

  return (
    <StatusItem icon={LightningIcon} title="Current Badge" content={content} />
  );
};

export {
  MyMenu,
  MenuContainer,
  Avatar,
  StatusMenu,
  StatusMenuItem,
  StatusItem,
  RankStatus,
  HintStatus,
  ProgressStatus,
};
