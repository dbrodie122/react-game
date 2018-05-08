import React from 'react';

const CenterControlArea = (props) => {
  return (
    <div className='main-center-control-container'>
      center control area
      <style jsx>{`
        .main-center-control-container {
          height: 95%;
          width: 50%;
          border: 1px solid black;
          border-radius: 5px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default CenterControlArea;