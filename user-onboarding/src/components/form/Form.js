import React, {useState, useEffect} from 'react';
import './form.css';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
  name: yup.string().required('Must add your name'),
  pass: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  terms: yup.mixed().oneOf([true], 'You must accept terms')
})

const Form = props => {
  const [newUser, setNewUser] = useState({
    name: '',
    pass: '',
    terms: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: '',
    pass: '',
    terms: '',
  });

  useEffect(() => {
    formSchema.isValid(newUser).then(valid => {
      setButtonDisabled(!valid)
    })
  }, [newUser])

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", newUser)
      .then(res => {
        props.setUsers([...props.users, res.data]);

        setNewUser({
          name: "",
          pass: "",
          terms: "",
        });
      })
      .catch(err => console.log('error', err.response));
  };

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors, 
          [e.target.name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
      })
  }

  const handleChange = e => {
    e.persist();
    const user = {...newUser, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value}

    validateChange(e);
    setNewUser(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input id='name' type='text' name='name' value={newUser.name} onChange={handleChange} />
        {errors.name.length > 0 ? (<p className='error'>{errors.name}</p>) : null}
      </label>
      <label htmlFor='pass'>
        Password:
        <input id='pass' type='password' name='pass' value={newUser.pass} onChange={handleChange} />
        {errors.pass.length > 0 ? (<p className='error'>{errors.pass}</p>) : null}
      </label>
      <label htmlFor='terms'>
        <input id='terms' type='checkbox' name='terms' checked={newUser.terms} onChange={handleChange} />
        Accept Terms of Service
      </label>
      <button type='submit' disabled={buttonDisabled}>Submit</button>
    </form>
  )
};

export default Form;