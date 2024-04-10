"use client"
import React from 'react';
import { TiLockClosed } from "react-icons/ti";
import { IoIosInformationCircleOutline as InfoIcon } from "react-icons/io";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function Form() {
    const { data: session, status } = useSession();
  
    return <>
        {
            status === "authenticated"? 
            <form className='w-full flex flex-col gap-5'>
                <div className='w-full flex'>
                    <h2 className='text-xl font-bold'>Your answer</h2>
                    <InfoIcon className='ml-auto hover:bg-blue-100 p-1 hover:cursor-pointer rounded-full' size={32} color='blue'/>    
                </div>

                <textarea className='w-full border-2 h-40 p-3' placeholder='e.g. Here you have a certain part that is not allowing you to do that' required/>
            
                <button type="submit" className='bg-blue-500 self-end w-fit text-white font-bold rounded py-3 px-6'>
                    Post
                </button>
            </form>
            :
            <section>
                            
                <div>           
                    <TiLockClosed color='blue' size={32}/>                 
                    <span>You need to log in to answer this question. </span>
                    <Link href='/log-in'>Log In</Link>
                </div>
            </section>
        }
    </>
}

export default Form;