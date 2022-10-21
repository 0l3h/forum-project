import React, { useState } from 'react';
import { useField } from 'formik';
import styles from './DragAndDrop.module.sass';

function DragAndDrop(props) {
  const [avatar, setAvatar] = useState(null);
  const [field, meta, helpers] = useField(props.name);
  const [dragStyles, setDragStyles] = useState({});
  const { setValue } = helpers;

  const onDragOver = e => {
    e.preventDefault();
    setDragStyles({
      backgroundColor: '#f6f9ff'
    })
  }

  const onDragLeave = () => {
    setDragStyles({});
  }

  const onDrop = e => {
    e.preventDefault();

    if(e.dataTransfer.files) {
      const reader = new FileReader();

      reader.readAsDataURL(e.dataTransfer.files[0]);

      reader.onloadend = () => {
        const encodedData = reader.result;

        setValue(encodedData);
        setAvatar(encodedData);
      }
    };
  }

  return <>
    <section>
      <label htmlFor="profilePicture">Profile picture</label>

      {
        avatar? 
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="user profile picture" />
        </div>
        :
        <>
          <button className={styles.defaultAvatarButton} type='button'>Use default avatar</button>
          <div style={dragStyles} className={styles.dndArea} 
              onDragOver={onDragOver} 
              onDragLeave={onDragLeave} 
              onDrop={onDrop}>

              Drag image in this area or choose file

            <label htmlFor="profilePicture">Choose image</label>
            <input type="file" name="profilePicture" id="profilePicture"/>
          </div>
        </>
      }
  
      
    </section>
  </>
};

export default DragAndDrop;