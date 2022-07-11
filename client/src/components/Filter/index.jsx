import React, { useState } from 'react';
import filterIcon from '../../images/filter-icon.svg';
import styles from './Filter.module.sass';

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
        <button className={styles.filterButton} onClick={toggleMenu}>
            <img className={styles.filterIcon} src={filterIcon} alt="filter icon"/>
            <span>Filter</span>
        </button>
            
        <form className={styles.filterMenu} data-is-open={isOpen.toString()}>
            <fieldset className={styles.sortFieldset}>
                <legend>Sort by:</legend>

                <label>
                    <input type="radio" name="sort" id="newest" value="newest"/>
                    
                    Newest
                </label>

                <label>
                    <input type="radio" name="sort" id="oldest" value="oldest"/>
                    
                    Oldest
                </label>
                
                <label>
                    <input type="radio" name="sort" id="upvotes" value="upvotes"/>
                
                    Upvotes
                </label>

                <label>
                    <input type="radio" name="sort" id="downvotes" value="downvotes"/> 
                
                    Downvotes
                </label>
            </fieldset>
                
            <input type="radio" name="filter" id="noAnswers" value="noAnswers"/>
            <label htmlFor="noAnswers">No answers</label>
            <label>
                Tags
                <input type="text" name="tags" placeholder='ex. javascript, c++'/>
            </label>
        </form>
    </>
  )
}

export default Filter;