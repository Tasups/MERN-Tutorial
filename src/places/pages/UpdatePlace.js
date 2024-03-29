import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input.js';
import Button from '../../shared/components/FormElements/Button.js';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators.js';
import { useForm } from '../../shared/hooks/form-hook.js';
import Card from '../../shared/components/UIElements/Card.js';

import './PlaceForm.css';

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


const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  
  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false)
  
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  
  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
    title: {
      value: identifiedPlace.title,
      isValid: true
    },
    description: {
      value: identifiedPlace.description,
      isValid: true
    }
  }, 
  true);
    }
  setIsLoading(false)
  }, [setFormData, identifiedPlace])
    
  

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  }
  
  if (!identifiedPlace) {
    return(
      <div className="center">
        <Card>
          <h2>Could not find place</h2>
        </Card>
      </div>
      )
  }
  
  if (isLoading) {
    return(
      <div className="center">
        <h2>Loading...</h2>
      </div>
      ) 
  }
  
  return(
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input 
        id="title" 
        element="input" 
        type="text" 
        label="Title" 
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input 
        id="description" 
        element="textarea" 
        label="Description" 
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description at least five characters long"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
    )
}

export default UpdatePlace;