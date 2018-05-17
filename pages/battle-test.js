import React from 'react';
import HealthBar from '../components/battle/HealthBar';

class BattleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: true,
      target: 'enemy',
      attacker: 'player',
      player: {
        name: 'Player',
        health: 20,
        maxHealth: 20,
        strength: 5
      },
      enemy: {
        name: 'Enemy',
        health: 10,
        maxHealth:10,
        strength: 5
      },
      eventLog: []
    }
    this.attack = this.attack.bind(this);
    this.manageTurnData = this.manageTurnData.bind(this);
    this.manageEnemyInterval = this.manageEnemyInterval.bind(this);
  }

  componentDidMount() {
    this.manageEnemyInterval();
  }

  componentWillUnmount() {
    clearInterval(this.enemyInterval)
  }

  attack() {
    const attacker = this.state[this.state.attacker];
    const target = this.state[this.state.target];
    const targetString = this.state.target;
    const damage = Math.floor(Math.random() * attacker.strength );
    const tCopy = { ...target };
    tCopy.health -= damage;
    const eventLog = this.state.eventLog;
    const event = `${attacker.name} attacks ${targetString} for ${damage} damage!`;
    eventLog.push(event);
    if (targetString === 'player') {

        this.setState((state) => ({ [targetString]: tCopy, eventLog }))
        this.manageTurnData();
    } else {
      this.setState((state) => ({ [targetString]: tCopy, eventLog }))
      this.manageTurnData();
    }
  }
  // bug
    // When there is a timeout so the enemy can "think", the enemy interval is still running.
    // the solution may be to terminate the enemy interval during the enemy's turn.
    // that way, during the player's turn the enemy interval is running to determine if its time for the enemy to make a move.
    // but during the enemy turn, the enemy will "think", move, then restart the interval after the turn changes to player
  manageEnemyInterval() {
    this.enemyInterval = setInterval(()=> {
      if (!this.state.playerTurn) {
        this.attack()
      }
    }, 100)
  }

  manageTurnData() {
    // update the turn to player or not
      // if the turn is enemy, target should be player and attacker should be enemy
      // if the turn is player, target should be enemy and attacker should be player.
    if (this.state.playerTurn) {
      this.setState((state) => ({ playerTurn: false, target: 'player', attacker: 'enemy' }))
    } else {
      this.setState((state) => ({ playerTurn: true, target: 'enemy', attacker: 'player' }))      
    }
  }


  render() {
    const percentPlayerHealth = ((this.state.player.health / this.state.player.maxHealth) * 100)
    let color = 'green';
    if (percentPlayerHealth <= 25) {
      color = 'red';
    } else if (percentPlayerHealth <= 50) {
      color = 'yellow';
    } else if (percentPlayerHealth > 50) {
      color = 'green';
    }
    const playerHealthStyle = {
      backgroundColor: `${color}`,
      width: `${percentPlayerHealth}%`,
      height: '100%',
      transition: 'all 0.5s'
    };

    const percentEnemyHealth = ((this.state.enemy.health / this.state.enemy.maxHealth) * 100)
    console.log(percentEnemyHealth)
    let color2 = 'green';
    if (percentEnemyHealth <= 25) {
      color2 = 'red';
    } else if (percentEnemyHealth <= 50) {
      color2 = 'yellow';
    } else if (percentEnemyHealth > 50) {
      color2 = 'green';
    }
    const enemyHealthStyle = {
      backgroundColor: `${color2}`,
      width: `${percentEnemyHealth}%`,
      height: '100%',
      transition: 'all 0.5s'
    };

    return(
      <div className='main-container'>
        <div className='secondary-container'>
          <div className='info-column'>
            <h1>Player</h1>
            <p>Remaining Health: { this.state.player.health }</p>
          </div>
          <h2>Current Turn: { this.state.playerTurn ? 'Player' : 'Enemy' }</h2>
          <div className='info-column'>
            <h1>Enemy</h1>
            <p>Remaining Health: { this.state.enemy.health }</p>
          </div>
        </div>
        <button onClick={ this.attack }>Attack</button>
        <div className='secondary-container'>
          <HealthBar healthStyle={ playerHealthStyle }/>
          <HealthBar healthStyle={ enemyHealthStyle }/>
        </div>
        <h3>Event Log</h3>
        { this.state.eventLog.length > 0 && this.state.eventLog.map((event, i) => <p key={ event + i }>{ event }</p>) }
        <style jsx>{`
          .main-container {
            display: flex;
            flex-direction: column;
          }
          .secondary-container {
            display: flex;
            justify-content: space-around;
          }
          .info-column {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

export default BattleTest;

//turn based system.

  // Manage turn in state: playerTurn: bool
  // after player takes an action, any action, swap playerTurn to false.
  // have enemy take an action, swap player turn to true.
    // display so we can see.