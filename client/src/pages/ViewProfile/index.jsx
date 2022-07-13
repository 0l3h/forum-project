import React from 'react';
import styles from './ViewProfile.module.sass';
import defaultAvatar from '../../images/default-avatar.svg';
import locationLogo from '../../images/location-logo.png';
import cakeLogo from '../../images/cake-logo.png';

function ViewProfile() {
    const userAvatar = undefined;

    return (
        <main className={styles.content}>
            <section className={styles.about}>
                <div className={styles.shortInfo}>
                    <img src={userAvatar || defaultAvatar} className={styles.avatar} alt="user avatar"/>
                    
                    <h1 className={styles.username}>Edd</h1>

                    <div>
                        <img src={cakeLogo} alt="cake" className={styles.logo}/>
                        <span>Joined 05/20/2022</span>
                    </div>
                    
                    <div>
                        <img src={locationLogo} alt="location" className={styles.logo}/>
                        <span>USA</span>
                    </div>

                    <button>Edit profile</button>
                </div>

                <div className={styles.bio}>
                    <h2 className={styles.heading}>Bio</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium sunt totam quia autem? Delectus ipsam incidunt ducimus commodi accusamus.
                    </p>
                </div>
            </section>

            <section className={styles.questions}>
                <h2 className={styles.heading}>Questions</h2>

                <article className={styles.question}>
                    <span className={styles.votes}>3</span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, hic?
                    </p>
                </article>

                <article className={styles.question}>
                    <span className={styles.votes}>-1</span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia harum magnam officiis consequuntur expedita tempore ratione reprehenderit necessitatibus illo.
                    </p>
                </article>
            </section>

            <section className={styles.tags}>
                <h2 className={styles.heading}>Tags</h2>

                <span className={styles.tag}>javascript</span>
                <span className={styles.tag}>sql</span>
            </section>
        </main>
    )
}

export default ViewProfile