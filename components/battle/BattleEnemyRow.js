import React from 'react';

class BattleEnemyRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: 10,
      damageReceived: 0
    };
    this.takeDamage = this.takeDamage.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.damage.id !== prevProps.damage.id && prevProps.damage.id !== undefined) {
      this.takeDamage(this.props.damage.damage)
    }
  }
  
  takeDamage(damage) {
    if (this.state.health <= 0) {
      console.log('monster died!')
    }
    this.setState((state) => ({health: state.health -= damage}))
    console.log('damaged!', this.state.health - damage)
  }


  render() {
    return (
      <div className='main-control-container'>
        <div className='enemy'/>
        <style jsx>{`
          .main-control-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            height: 50vh;
            width: 94vw;
          }
          .enemy {
            background-color: red;
            height: 25vh;
            width: 20vw;
            margin-right: 5vw
          }
        `}</style>
      </div>
    )
  }
}

export default BattleEnemyRow;

/*
TO handle battle mechanics, something I could do is set properties in the state of the battle enemy component

So, an enemy object can be passed to the component depending on what enemyyou're fighting.  That object would have health, potential drops, image, maybe even fight animations.

the state of that object gets set with the stats, and there are standard  methods for causing damage, healing, etc.

So, a player hits the input to fight
  - stats are checked, a function determines if it is a hit or miss.
  - a function determines how much damage is going to be dealt.
  - the result of that calculation gets passed to the enemy component, and used as an argument to the methods that subtract health.
  - health of that enemy is monitored in the state of that object. 
  - on death of the enemy, the component is unmounted.
  - player stats will also have to be kept in state somewhere, and on death of the enemy the rewards in terms of xp will need to be passed to the player property in state.
  - eventually, we will want persistence of the player so they can play.  

*/