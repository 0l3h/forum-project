import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './ViewProfile.module.sass';
import defaultAvatar from '../../images/default-avatar.svg';
import locationLogo from '../../images/location-logo.png';
import cakeLogo from '../../images/cake-logo.png';
import SideMenu from '../../components/SideMenu';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/index.jsx';
import LoadingSpinner from '../../components/LoadingSpinner/index.jsx';

function ViewProfile() {
    const userData = useSelector(({ user: { userData } }) => userData);
    const isFetching = useSelector(({ user: { isFetching } }) => isFetching);

    return <>
        <Navbar/>

        <main className={styles.container}>
            <SideMenu/>

            <div className={styles.content}>
                {
                    isFetching?
                    <LoadingSpinner/>
                    :
                    <div>
                        <section className={styles.briefInfo}>
                            <div className={styles.avatar}>
                                <img src={`${userData.profilePictureUrl}?uuid=${uuidv4()}` || defaultAvatar} alt="user avatar"/>
                            </div>

                            <div className={styles.bio}>                            
                                <div>
                                    <img src={cakeLogo} alt="cake" className={styles.icon}/>
                                    <span>Joined 05/20/2022</span>
                                </div>

                                <div>
                                    <img src={locationLogo} alt="location" className={styles.icon}/>
                                    <span>USA</span>
                                </div>
                            </div>
                        </section>

                        <div>
                            <section className={styles.about}>
                                <h1 className={styles.username}>{userData.username}</h1>

                                <p>{userData.about}</p>
                            </section>

                            <section className={styles.stats}>
                                <div>
                                    <span>Reputation</span>
                                    <span>37</span>
                                </div>

                                <div>
                                    <span>Impact</span>
                                    <span>37 people reached</span>
                                </div>

                                <div>
                                    <span>Last acivity</span>
                                    <span>5 days ago</span>
                                </div>

                                <div>
                                    <span>Questions</span>
                                    <span>{userData.questions.length}</span>
                                </div>

                                <div>
                                    <span>Answers</span>
                                    <span>5 days ago</span>
                                </div>
                            </section>

                            <div>  
                                {/* <section className={styles.questions}>
                                    <h2>Questions</h2>

                                    {
                                        userData.questions?
                                        userData.questions.map(q => (
                                            <article className={styles.question}>
                                                <span className={styles.votes}>3</span>

                                                <p>{q.title}</p>
                                            </article>
                                        ))
                                        :                            
                                        <div>
                                            <span>You haven't asked any questions yet</span>
                                        </div>
                                    }
                                </section> */}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main>

        <Footer/>
    </>
}

export default ViewProfile