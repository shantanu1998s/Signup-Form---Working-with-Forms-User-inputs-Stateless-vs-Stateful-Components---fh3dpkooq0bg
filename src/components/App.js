import React, { Component, useState } from "react";
import '../styles/App.css';
const App = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [gender,setGender]=useState('male');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [flag,setFlag]=useState(false);
  function validateName(e){
    setName(e.target.value);
  }
  function validateEmail(e){
    setEmail(e.target.value);
  }
  function validateGender(e){
    setGender(e.target.value);
  }
  function validatePhoneNumber(e){
    setPhoneNumber(e.target.value);
  }
  function validatePassword(e){
    setPassword(e.target.value);
  }
  function validateForm(e){
    e.preventDefault();
    setFlag(false);
    if(name=='' || email=='' || phoneNumber=='' || password==''){
      setError('All fields are mandatory');
      return;
    }
    if(!name.match("^[a-zA-Z0-9 ]+$")){
      setError('Name is not alphanumeric');
      return;
    }
    if(!email.match('@')){
      setError('Email must contain @');
      return;
    }
    if(!phoneNumber.match('^[0-9]*$')){
      setError('Phone Number must contain only numbers');
      return;
    }
    if(password.length<6){
      setError('Password must contain atleast 6 letters');
      return;
    }
    setError('');
    setFlag(true);

  }
  return (
    <div id="main">
      <form onSubmit={validateForm}>
        <label>Name</label>
        <input data-testid='name' type={'text'} onChange={validateName}/>
        <label>Email</label>
        <input data-testid='email' type={'text'} onChange={validateEmail} />
        <select data-testid='gender' defaultValue={gender} onChange={validateGender}>
          <option value={'male'}>male</option>
          <option value={'female'}>female</option>
          <option value={'other'}>other</option>
        </select>
        <label>Phone Number</label>
        <input type={'text'} data-testid='phoneNumber' onChange={validatePhoneNumber}/>
        <label>Password</label>
        <input type={'password'} data-testid='password' onChange={validatePassword} />
        <button type="submit" data-testid='submit'>Submit</button>
        <div>{error}</div>
      </form>
      {flag?<div>Hello {email.substring(0,email.indexOf('@'))}</div>:null}
    </div>
  )
}


export default App;
