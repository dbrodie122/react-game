import React from 'react';

const HealthBar = (props) => {

  return (
    <div className='outer-container'>
      <div style={props.healthStyle}>HP</div>
      <style jsx>{`
        .outer-container {
          width: 15vw;
          height: 2vh;
          border: 1px solid black;
        }
      `}</style>
    </div>
  )
}

export default HealthBar;