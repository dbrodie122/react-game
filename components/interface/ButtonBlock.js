import React from 'react';
import Button from './Button';

const ButtonBlock = (props) => {
  return (
    <div className='button-container'>
      <Button onClick={ props.attack }/>
      <Button />
      <Button />
      <style jsx>{`
        .button-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}

export default ButtonBlock;