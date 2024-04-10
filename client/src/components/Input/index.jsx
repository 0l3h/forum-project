import React from 'react';
import { useField } from 'formik';

function Input(props) {
  const [field, meta] = useField(props);
  
  return <>
    <input {...field} {...props}/>
    <div>
    {
      meta.touched && 
      meta.error && 
      <span>{meta.error}</span>            
    }
    </div>
  </>
}

export default Input;