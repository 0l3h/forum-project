import React from 'react';
import styles from './CodeBox.module.sass';

function CodeBox() {
    const code = String.raw`
    function foo() {
        return;
    };
    `
    
    return (
        <div className={styles.codeBox}>
            <button>
                copy
            </button>
            
            <code>
                <pre>{code}</pre>
            </code>
        </div>
    )
}

export default CodeBox;