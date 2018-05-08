import React from 'react';
const imageStyle ={
  height: '100%',
  width: '100%'
}

const Image = (props) => {
  return (
    <img style={imageStyle} src='/static/dusk-landscape.png'/>
  )
}

export default Image;