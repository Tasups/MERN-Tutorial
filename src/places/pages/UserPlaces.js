import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList.js';

const DUMMY_PLACES = [
      {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://github.com/Tasups/images/blob/main/empirestatebuilding.jpg?raw=true',
        address: '20 W 34th St, New York, NY 10001',
        location: {
          lat: 40.7484405,
          lng: -73.9856644
        },
        creator: 'u1'
      },
      {
        id: 'p2',
        title: 'Eiffel Tower',
        description: 'One of the most famous buildings in the world!',
        imageUrl: 'https://github.com/Tasups/images/blob/main/EiffelTower.jpg?raw=true',
        address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
        location: {
          lat: 48.8584,
          lng: 2.2945
        },
        creator: 'u2'
      }
  ];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return(
    <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;