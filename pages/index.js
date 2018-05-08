import React from 'react';
import BasePage from '../components/BasePage';
import ControlContainer from '../components/interface/ControlContainer';
import VisualSpace from '../components/interface/VisualSpace';
import ButtonBlock from '../components/interface/ButtonBlock';
import CenterControlArea from '../components/interface/CenterControlArea';
import Image from '../components/interface/Image';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BasePage>
        <VisualSpace>
          <Image />
        </VisualSpace>
        <ControlContainer>
          <ButtonBlock />
          <CenterControlArea />
          <ButtonBlock />
        </ControlContainer>
      </BasePage>
    )
  }
}

export default Main;