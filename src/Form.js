import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitForm = () => setIsSubmitted(true)

  return (
    <>
    <div className="form-container">
        <span className='close-btn'>x</span>
        <div className="form-content-left">
            <img src="https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-2.svg" alt="image2" className="form-img" />
        </div>
        
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
    </>
  )
 
};

export default Form;
