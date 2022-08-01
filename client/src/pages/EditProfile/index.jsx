import React from 'react'
import styles from './EditProfile.module.sass';
import warningIcon from '../../images/warning-icon.png'

function EditProfile() {
    return (
        <main className={styles.content}>
            <form action="" className={styles.editProfileForm}>
                <h1 className={styles.heading}>Edit profile</h1>

                <section className={styles.warning}>
                    <img src={warningIcon} className={styles.warningIcon} alt="warning icon" />
                    <p>When editing your profile, remember to follow our community rules</p>
                </section>
                
                <label>
                    Profile picture
                
                    <input type="file" name="profile-picture" className={styles.imageUpload}/>    
                </label>

                <label>
                    About

                    <input type="text" name="about" placeholder="About" className={styles.dataInput}/>
                </label>
                
                <label>
                    Password
                
                    <input type="password" name="password" placeholder="Password" className={styles.dataInput}/>
                </label>
                
                <label>
                    Email

                    <input type="email" name="email" placeholder="Email" className={styles.dataInput}/>
                </label>
                
                <button className={styles.cancelButton}>Cancel</button>
                <button type="submit" className={styles.submitButton}>Confirm</button>
            </form>
        </main>
    )
}

export default EditProfile;