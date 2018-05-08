import React from 'react';
import Button from './Button';

const ButtonBlock = (props) => {
  return (
    <div>
      <Button />
      <Button />
      <Button />
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      `}</style>
    </div>
  )
}

export default ButtonBlock;