import React from 'react';
import { useField } from 'formik';
import styles from './Input.module.sass';

function Input(props) {
  const [field, meta] = useField(props);
  
  return <>
    <input {...field} {...props} className={styles.dataInput}/>
    <div className={styles.errorBox}>
    {
      meta.touched && 
      meta.error && 
      <span className={styles.errorMesage}>{meta.error}</span>            
    }
    </div>
  </>
}

export default Input;