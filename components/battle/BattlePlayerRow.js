import React from 'react';

class BattlePlayerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-control-container'>
        <div className='player'/>
        <style jsx>{`
          .main-control-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            height: 50vh;
            width: 94vw;
          }
          .player {
            background-color: blue;
            height: 25vh;
            width: 20vw;
            margin-left: 5vw;
          }
        `}</style>
      </div>
    )
  }
}

export default BattlePlayerRow;