import React from 'react';
import './form.css';

const Form = () => {
  return (
    <form>
      <label htmlFor='name'>
        Name:
        <input id='name' type='text' />
      </label>
      <label htmlFor='pass'>
        Password:
        <input id='pass' type='password' />
      </label>
      <label htmlFor='terms'>
        <input id='terms' type='radio' />
        Accept Terms of Service
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
};

export default Form;