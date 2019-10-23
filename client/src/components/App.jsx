import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('dis is data', data)
    axios.post('/signUp', data)
      .then(res => {
        console.log("we did it", res)
      })
      .catch(err => {
        console.log("u fked up", err)
      })
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({ required: true, maxLength: 80 })} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({ required: true, maxLength: 100 })} />
      <input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({ required: true, minLength: 6, maxLength: 12 })} />
      <input type="text" placeholder="Discord" name="Discord" ref={register({ required: true })} />

      <input type="submit" />
    </form>
  );
}