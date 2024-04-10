'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from "typewriter-effect/dist/react";
import bgImage from '../../images/ccchaos.svg';
import homepageImg from '../../images/homepage.svg';


function Header() {
    return (
        <header className='flex items-center max-w-7xl py-56 mx-auto'>
            <section className='flex flex-col items-center text-center px-10 lg:px-0 sm:text-left sm:items-start gap-5'>
                <div className='text-5xl font-bold'>
                    <span>Discussion forum for </span>
                    <span style={{ display: 'inline-block' }}> 
                        <Typewriter  options={{
                            strings: ['developers', 'artists', 'engineers', 'designers'], 
                            autoStart: true,
                            skipAddStyles: true,
                            wrapperClassName: 'inline',
                            loop: true,
                            delay: 70
                        }}/>
                    </span>
                </div>


                <p className='max-w-prose mb-5'> 
                    Askme provides a platform for discussions on a wide range of topics, from technology and science to art, culture, and everything in between.
                </p>

                <div>
                    <Link href='/questions' className='hover:underline bg-blue-700 bg-gradient-to-b from-indigo-400 to-blue-700 shadow-lg from inline-block p-4 rounded mr-4 text-white max-w-fit'>
                        Browse Questions
                    </Link>

                    <Link href='/sign-up' className='hover:underline text-blue-700 inline-block font-bold max-w-fit'>
                        Join us
                    </Link>
                </div>    
            </section> 
            {/* <Image src={bgImage} className='opacity-40 max-w-3xl' alt='background image'/> */}
        </header>
    )
}

export default Header;