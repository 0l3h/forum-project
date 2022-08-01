import React from 'react'
import styles from './DragAndDrop.module.sass';

function DragAndDrop() {
  return (
    <div className={styles.dragAndDrop}>
        <span>Drag image here or upload the file</span>
        <button></button>
    </div>
  )
};

export default DragAndDrop;