import React from 'react';
import useSignUp from './custom_hooks/UseSignUp.js'

const SignUp = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUp({ firstName: '', lastName: '', email: '', discord: '' }, SignUp);

  // alert(
  //   `User Created!
  //       Name: ${inputs.firstName} ${inputs.lastName}
  //       Email: ${inputs.email}
  //       Discord: ${inputs.discord}
  //       `)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type='text' name='firstName' onChange={handleInputChange} value={inputs.firstName} required />
        <label>Last Name</label>
        <input type='text' name='lastName' onChange={handleInputChange} value={inputs.lastName} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type='text' name='email' onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Discord Name</label>
        <input type='text' name='discord' onChange={handleInputChange} value={inputs.discord} required />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUp