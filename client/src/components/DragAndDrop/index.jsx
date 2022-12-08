import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useField } from 'formik';
import defaultAvatar from './../../images/default-avatar.svg';
import styles from './DragAndDrop.module.sass';

function DragAndDrop(props) {
  // const  = useSelector();
  const [avatar, setAvatar] = useState(null);
  const [field, meta, helpers] = useField(props.name);
  const [dragStyles, setDragStyles] = useState({});
  const fileRef = useRef();
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

  const uploadFile = e => {
    e.preventDefault();

    const reader = new FileReader();

    reader.readAsDataURL(fileRef.current.files[0]);

    reader.onloadend = () => {
      const encodedData = reader.result;

      setValue(encodedData);
      setAvatar(encodedData);
    }
  };

  const onDefaultAvatarUpload = () => {
    setValue('default');
    setAvatar(defaultAvatar);
  }; 

  const onImageRevert = () => {
    setValue(null);
    setAvatar(null);
  };

  return <>
    <section>
      <label htmlFor="profilePicture">Profile picture</label>

      {
        avatar? 
        <section className={styles.avatarContainer}>
          <div>
            <img src={avatar} alt="user profile picture" />
          </div>
          <button onClick={onImageRevert} type='button'>x</button>
        </section>
        :
        <>
          <button className={styles.defaultAvatarButton} onClick={onDefaultAvatarUpload} type='button'>Use default avatar</button>
          <div style={dragStyles} className={styles.dndArea} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
            Drag image in this area or choose file

            <label htmlFor="profilePicture">Choose image</label>
            <input type="file" ref={fileRef} onChange={uploadFile} name="profilePicture" id="profilePicture"/>
          </div>
        </>
      }
    </section>
  </>
};

export default DragAndDrop;