'use client'
import React from 'react';
import Link from 'next/link';
import Typewriter from "typewriter-effect/dist/react";

function Header() {
    return (
        <header className='bg-header-lines bg-cover flex flex-col p-20 gap-5'>
            {/* <div className='flex flex-col items-center gap-5'> */}
                <h1 className='text-4xl font-bold'>Askme</h1>
                
                <div>
                    <span>Discussion forum for </span>
                    <span style={{ display: 'inline-block' }}> 
                        <Typewriter  options={{
                            strings: ['developers', 'artists', 'engineers'], 
                            autoStart: true,
                            skipAddStyles: true,
                            wrapperClassName: 'inline',
                            loop: true
                        }}/>
                    </span>
                </div>

                <div>
                    <Link href='/questions' className='bg-blue-700 inline-block p-4 rounded mr-4 text-white max-w-fit'>
                        Browse Questions
                    </Link>

                    <Link href='/sign-up' className='text-blue-700 inline-block font-bold max-w-fit'>
                        Join The Community
                    </Link>
                </div>
            {/* </div> */}
            
           
        </header>
    )
}

export default Header;