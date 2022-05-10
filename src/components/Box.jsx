import React from 'react'

export default function Box() {
     const boxStyle = {
       margin: '10px',
       border: '1px solid red',
       borderRadius: '10%',
       backgroundColor: '#000',
     };
  return <div className='box' style={boxStyle}></div>;
}
