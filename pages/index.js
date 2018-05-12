import React from 'react';
import BasePage from '../components/BasePage';
import ControlContainer from '../components/interface/ControlContainer';
import VisualSpace from '../components/interface/VisualSpace';
import ButtonBlock from '../components/interface/ButtonBlock';
import CenterControlArea from '../components/interface/CenterControlArea';
import BattleArea from '../components/battle/BattleArea';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      damageDealt: 0
    };
    this.attack = this.attack.bind(this);
  }

  attack() {
    const damage =  Math.floor(Math.random() * Math.floor(5));
    alert(`attacked and dealt: ${damage} damage!` )
    this.setState((state) => ({ damageDealt: damage }))
  }

  render() {
    return (
      <BasePage>
        <VisualSpace background='/static/dusk-landscape.png'>
          <BattleArea damage={ this.state.damageDealt }/>
        </VisualSpace>
        <ControlContainer>
          <ButtonBlock attack={ this.attack }/>
          <CenterControlArea />
          <ButtonBlock />
        </ControlContainer>
      </BasePage>
    )
  }
}

export default Main;