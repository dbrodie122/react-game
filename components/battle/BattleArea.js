import React from 'react';
import BattlePlayerRow from './BattlePlayerRow';
import BattleEnemyRow from './BattleEnemyRow';

class BattleArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-control-container'>
        <BattleEnemyRow damage={ this.props.damage } />
        <BattlePlayerRow />
        <style jsx>{`
          .main-control-container {
            display: flex;
            flex-direction: column;
            height: 50vh;
            width: 94vw;
          }
        `}</style>
      </div>
    )
  }
}

export default BattleArea;