import React from 'react';
import { MdLeaderboard } from "react-icons/md";
import Image from 'next/image';
import personPhoto from '../../images/portrait-1.jpg'

function TopUsers() {
  return (
    <div className='bg-white p-5 hidden xl:block xl:mb-5'>
        <span className='block font-bold mb-3'>Top Users</span>
        
        <ul className='flex flex-col gap-5'>
            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>caleb.dev</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>caleb.dev</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>caleb.dev</p>
                    <p className='text-xs'>Rating 50</p>
                </div>    
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>caleb.dev</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>
        </ul>
    </div>
  )
};

export default TopUsers;