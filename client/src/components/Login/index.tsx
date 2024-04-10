// import React, { useEffect } from 'react';
'use client'

import { v4 as uuidv4 } from 'uuid';
import { SignInResponse, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import companyLogo from '../../images/askmeLogo.png';

function LogInModal() {
    const router = useRouter();

    async function submit (data: FormData) {
        const userObj = {...Object.fromEntries(data.entries())}

        try {
            await signIn("credentials", {
                id: uuidv4(), 
                email: userObj.email,
                password: userObj.password,
                redirect: false
            });

            router.replace("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex fixed justify-center items-center bg-black z-[100] bg-opacity-20 h-full w-full'>
            <form className='relative flex flex-col gap-5 shadow-lg p-10 bg-white h-fit' action={submit}>
                <IoIosClose onClick={router.back} size={30} className='absolute right-3 top-3 rounded-full hover:bg-gray-100 cursor-pointer'/>
                
                <Image width={40} src={companyLogo} className='mx-auto' alt="logo"/>

                <h1 className='font-bold text-2xl text-center'>Log in</h1>

                <label>
                    <p className='font-bold mb-2'>Email</p>
                    <input className='py-2 px-3 rounded border-[1px] border-gray-300' type="email" name="email" placeholder='user@mail.com'/>
                </label>
                
                <label>
                    <p className='font-bold mb-2'>Password</p>
                    <input className='py-2 px-3 rounded border-[1px] border-gray-300' type="password" name="password" placeholder='Enter your password'/>
                </label>

                <div>
                    <span className='text-gray-500'>Have no account yet?</span>
                    <Link href="/signup" className='text-blue-500 hover:underline'> Sign up</Link>
                </div>

                <button type="submit" className='bg-blue-500 text-white text-sm py-2 px-5 rounded'>
                    Log in
                </button>

                <div className='w-full text-center border-b-gray-300 border-b-2 leading-[0.1em] my-5'>
                    <span className='py-0 px-3 bg-white w-fit'>
                        Or
                    </span>
                </div>

                <button 
                    className='flex items-center gap-5 border-2 border-gray-200 py-2 px-5 rounded' 
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                >
                    <FaGithub size={30}/>
                    <span>Log in with Github</span>
                </button>
                
                <button 
                    className='flex items-center gap-5 border-2 border-gray-200 py-2 px-5 rounded' 
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                    <FcGoogle size={30}/>
                    <span>Log in with Google</span>
                </button>
            </form>
        </div>
    )
}

export default LogInModal;