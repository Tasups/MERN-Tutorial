import React from 'react';

import './PlaceList.css';
import PlaceItem from './PlaceItem.js';
import Card from '../../shared/components/UIElements/Card.js';
import Button from '../../shared/components/FormElements/Button.js';

const PlaceList = (props) => {
  
  if(props.items.length === 0) {
    return(
      <div className="place-list center">
        <Card style={{margin: "1rem", padding: "2rem"}}>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
      )
  }
  return(
    <ul className="place-list">
      {props.items.map(place =>
        <PlaceItem 
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address} 
          creatorId={place.creator}
          coordinates={place.location}
        />
      )}
    </ul>
    )
}

export default PlaceList;