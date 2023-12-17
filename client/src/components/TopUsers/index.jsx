import React from 'react';
import { MdLeaderboard } from "react-icons/md";
import Image from 'next/image';
import personPhoto from '../../images/portrait-1.jpg'

function TopUsers() {
  return (
    <div className='bg-white p-5'>
        <div className='flex items-center gap-3 mb-3'>
            <MdLeaderboard color='blue' size={24}/>
            <span className='font-bold'>Top Users</span>
        </div>
        
        <ul className='flex flex-col gap-5'>
            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>n1cknam3_1</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>n1cknam3_1</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>n1cknam3_1</p>
                    <p className='text-xs'>Rating 50</p>
                </div>    
            </li>

            <li className='flex gap-3'>
                <div className='overflow-hidden max-h-10 aspect-square rounded-full'>
                    <Image src={personPhoto} alt='person photo'/>
                </div>
                <div>
                    <p>n1cknam3_1</p>
                    <p className='text-xs'>Rating 50</p>
                </div>
            </li>
        </ul>
    </div>
  )
};

export default TopUsers;