// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { TbMessage2Question } from "react-icons/tb";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function index() {
    // useEffect(() => {
    //     window.gtag('config', 'G-WJZPSFS6SG', {
    //         send_page_view: false,
    //     });

    //     window.gtag('event', 'page_view', {
    //         page_title: 'Homepage',
    //     })
    // }, [])
    
    return <>
        <Navbar/>
        
        <main className="min-h-screen">
            <Header/>
            <div className='flex gap-8'>
                <div className='p-10 shadow-md rounded max-w-sm'>
                    <FaSearch size={26} color='blue'/>

                    <h3 className='font-bold'>
                        Find answers
                    </h3>
                    
                    <p>
                        Stuck with the problem? Chances are someone already asked for help
                    </p>

                    {/* <NavLink to='/browse-questions'>Browse Questions</NavLink> */}
                </div>
                
                <div className='p-10 shadow-md max-w-sm'>
                    <TbMessage2Question size={26} color='blue'/>

                    <h3 className='font-bold'>
                        Ask questions
                    </h3>
                    
                    <p>
                        If you can't find solution, you may ask other developers about your specific problem
                    </p>
                </div>
                
                <div className='p-10 shadow-md max-w-sm'>
                    <LiaHandsHelpingSolid size={26} color='blue'/>

                    <h3 className='font-bold'>Help others</h3>
                    
                    <p>
                        Know solution to the problem? Help by providing the answer
                    </p>
                </div>
            </div>
        </main>

        <Footer/>
    </>
}

export default index