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
      damageDealt: { damage: 0, id: 0 },
      monsterHealth: 10
    };
    this.attack = this.attack.bind(this);
  }

  attack() {
    const damage =  Math.floor(Math.random() * Math.floor(5));
    console.log(`attacked and dealt: ${damage} damage!` )
    const damageDealt = { ...this.state.damageDealt };
    damageDealt.damage = damage;
    damageDealt.id += 1;
    this.setState((state) => ( { damageDealt } ))
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