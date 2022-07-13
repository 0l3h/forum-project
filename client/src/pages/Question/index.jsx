import React from 'react'
import CodeBox from '../../components/CodeBox';
import QuoteBox from '../../components/QuoteBox';
import Page from '../Page'
import styles from './Question.module.sass';

function Question() {
    return (
        <Page>
            <main className={styles.content}>
                <section className={styles.question}>
                    <h1 className={styles.heading}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, voluptates!
                    </h1>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam, ducimus tenetur a dolores dignissimos obcaecati perferendis quae praesentium molestias beatae fugiat. Alias aspernatur?
                    </p>

                    <CodeBox/>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <QuoteBox/>
                </section>
            </main>
        </Page>
    )
}

export default Question;