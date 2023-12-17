import React from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';

function Footer() {
    return <footer className='bg-zinc-800 text-gray-300 flex justify-between p-12'>
        <p className='font-bold'>Askme is a forum created by a single developer as a personal project</p>

        <div className='flex gap-12'>
            <ul>
                <h1 className='font-bold'>Socials</h1>

                <li>
                    <a href="https://www.linkedin.com/in/oleh-levchenko-351266208/" target="_blank">My LinkedIn</a>
                </li>
            </ul>

            <ul>
                <h1 className='font-bold'>Resoures</h1>

                <li>
                    <Link href="/credits">Credits</Link>
                </li>
            </ul>
        </div>
    </footer>
}

export default Footer;