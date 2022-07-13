import React from 'react';
import styles from './Home.module.sass';
import Header from '../../components/Header';
import technologiesImage from './../../images/technologies.svg';
import downloadImage from './../../images/cloud-download.svg';
import maintenanceImage from './../../images/maintenance.svg';

function index() {
    return (
        <main>
            <Header/>
            
            <section className={styles.details}>
                <div className={styles.description}>
                    <img src={downloadImage} alt="" />

                    <h3 className={styles.heading}>
                        Lorem, ipsum dolor.
                    </h3>
                    
                    <p className={styles.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, et vero aliquid doloremque est quibusdam eos. Voluptatem maiores eos corrupti!
                    </p>
                </div>
                
                <div className={styles.description}>
                    <h3 className={styles.heading}>
                        Dozens of topics
                    </h3>
                    
                    <p className={styles.text}>
                        Python, JavaScript or PHP - here you'll find technology related to your question
                    </p>
                    
                    <img src={technologiesImage} alt="" />
                </div>
                
                <div className={styles.description}>
                    <img src={maintenanceImage} alt="" />
                    
                    <h3 className={styles.heading}>Lorem, ipsum dolor.</h3>
                    
                    <p className={styles.text}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, et vero aliquid doloremque est quibusdam eos. Voluptatem maiores eos corrupti!
                    </p>
                </div>
            </section>
        </main>
    )
}

export default index