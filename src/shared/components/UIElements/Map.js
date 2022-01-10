import React from 'react';

import './Map.css';

const Map = (props) => {
  return(
    <div 
      className={`map ${props.className}`} 
      style={{color: "black", backgroundColor: "lightblue"}}/*{props.style}*/
    >
     <h1>THE MAP!</h1>
    </div>
    )
}

export default Map;