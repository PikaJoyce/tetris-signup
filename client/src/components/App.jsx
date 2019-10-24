import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios.post('/signUp', data)
      .then(res => {
        alert(`Success!`)
      })
      .catch(err => {
        alert('Please use valid JTetris username')
      })
  };
  console.log('Please fill in valid JTetris username and discord');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="JTetris Username" name="userName" ref={register({ required: true, maxLength: 80 })} />
      <input type="text" placeholder="Discord" name="discord" ref={register({ required: true })} />
      <input type="submit" />
    </form>
  );
}