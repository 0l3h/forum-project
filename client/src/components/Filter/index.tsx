// import React, { useState } from 'react';
// import filterIcon from '../../images/filter-icon.svg';
import { FaFilter } from "react-icons/fa6";

function Filter() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(isOpen => !isOpen);
//   };

  return (
    <>
        {/* <button className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <FaFilter/>
            <span>Filter</span>
        </button>*/}

        <details className="relative">
            <summary className="flex items-center gap-3 hover:cursor-pointer py-2 px-3 rounded bg-gray-200">
                <FaFilter/>
                <span>Filter</span>
            </summary>
            <section className="w-60 z-10 py-2 px-3 right-0 absolute shadow-xl bg-white">
                <label>
                    <input type="radio" name="date"/>
                    <span className="ml-3">Newest</span>
                </label>
            </section>
        </details>

        {/* <select className="px-4 py-2 w-fit rounded-md bg-gray-200 border-none ring-0 text-sm">
		  <option value="*">All</option>
		  <option value="for-rent">Unanswered</option>
		  <option value="for-sale">Rewarded</option>
		</select> */}

        {/* <form className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <fieldset>
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
        </form> */}
    </>
  )
}

export default Filter;