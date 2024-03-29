import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input.js';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators.js';
import Button from '../../shared/components/FormElements/Button.js';
import Card from '../../shared/components/UIElements/Card.js';
import { useForm } from '../../shared/hooks/form-hook.js';

import './Auth.css';


const Auth = () => {
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    }, 
    password: {
      value: '',
      isValid: false
    }
  }, false);
  

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs)
  }
  
  const switchModeHandler = () => {
    if(!isLoginMode){
      setFormData({ 
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs, 
        name: {
          value: '', 
          isValue: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
  }
  
  return(
      <Card 
        className="authentication" 
        style={{backgroundColor: "white"}} 
        onSubmit={authSubmitHandler}
      >
        <h2>Login Required</h2>
        <hr style={{width: "90%"}} />
        <form style={{width: "80%", margin: "auto"}} onSubmit={authSubmitHandler}>
        {!isLoginMode && 
        <Input element="input"
          id="name"
          type="text"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a name"
          onInput={inputHandler}
        />
        }
        <Input 
          element="input"
          id="email"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
          onInput={inputHandler}
        />
        <Input 
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a valid password of at least eight characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </form>
      </Card>
    )
}

export default Auth;