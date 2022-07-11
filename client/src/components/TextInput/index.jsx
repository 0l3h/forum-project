import React from 'react';
import styles from './TextInput.module.sass';
import imageLogo from '../../images/put-image-logo.png';
import codeLogo from '../../images/put-code-logo.png';
import boldTextLogo from '../../images/bold-text-logo.png';
import quoteLogo from '../../images/quote-logo.png';

function TextInput() {
    return (
        <section>
            <div className={styles.stylingContainer}>
                <button>
                    <img src={imageLogo} className={styles.logo} alt="image logo" />                    
                </button>

                <button>
                    <img src={codeLogo} className={styles.logo} alt="code logo" />
                </button>

                <button>
                    <img src={boldTextLogo} className={styles.logo} alt="quote logo" />
                </button>

                <button>
                    <img src={quoteLogo} className={styles.logo} alt="bold text logo" />
                </button>
            </div>

            <textarea className={styles.text} name="textInput"/>
        </section>
    )
}

export default TextInput