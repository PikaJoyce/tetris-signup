import { useState } from 'react';

const useSignUp = (state, cb) => {
  const [inputs, setInputs] = useState(state)

  // Prevents refresh and runs the callback function
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    cb();
  }

  // Handles inputs given by the user
  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs =>
      ({
        ...inputs,
        [e.target.name]: e.target.value
      }))
  }

  return {
    handleSubmit, handleInputChange, inputs
  };
}

export default useSignUp;