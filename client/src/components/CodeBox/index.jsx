import React from 'react';
import styles from './CodeBox.module.sass';
import copyLogo from '../../images/copy-logo.png';

function CodeBox() {
    const code = String.raw`
    function foo() {
        return;
    };
    `
    
    return (
        <div className={styles.codeBox}>
            <img src={copyLogo} className={styles.copyLogo} alt="copy logo"/>
            
            <code>
                <pre>{code}</pre>
            </code>
        </div>
    )
}

export default CodeBox;