'use client'

import { v4 as uuidv4 } from 'uuid';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import companyLogo from '../../images/askmeLogo.png';
import { signUpUser } from '../../api';

function SignInModal() {
    const router = useRouter();
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [repeatPassword, setRepeatPassword] = useState("");

    async function signupGithub() {
        const res = await signIn("github", { callbackUrl: "/" })
        console.log(res);
        console.log("some data");
        // if(res?.ok) submit(data);
    }
    
    async function signupGoogle() {
        const res = await signIn("google", { callbackUrl: "/" })
        // if(res?.ok) await signUpUser(userObj);
    }

    async function submit (data: FormData) {
        const userObj = {...Object.fromEntries(data.entries()), id: uuidv4()}
        const res = await signUpUser(userObj);
        
        console.log("result: ", { res });
    } 

    return (
        <div className='flex fixed justify-center items-center bg-black bg-opacity-20 z-[100] h-full w-full'>
            <form className='relative flex flex-col gap-5 shadow-lg p-10 bg-white h-fit z-50'>
                <IoIosClose onClick={router.back} size={30} className='absolute right-3 top-3 rounded-full hover:bg-gray-100 cursor-pointer'/>
                
                <Image width={40} src={companyLogo} className='mx-auto' alt="logo"/>

                <h1 className='font-bold text-2xl text-center'>Sign up</h1>

                <label>
                    <p className='font-bold mb-2'>Username</p>
                    <input 
                        className='py-2 px-3 rounded border-[1px] border-gray-300' 
                        type="text" 
                        name="username" 
                        // value={username}
                        // onChange={() => setUsername} 
                        required
                        placeholder='Enter your username'/>
                </label>

                <label>
                    <p className='font-bold mb-2'>Email</p>
                    <input 
                        className='py-2 px-3 rounded border-[1px] border-gray-300' 
                        type="email" 
                        name="email" 
                        // value={email} 
                        // onChange={() => setEmail} 
                        required
                        placeholder='e.g. user@mail.com'/>
                </label>
                
                <label>
                    <p className='font-bold mb-2'>Password</p>
                    <input className='py-2 px-3 rounded border-[1px] border-gray-300' 
                        type="password" 
                        name="password" 
                        // value={password}
                        // onChange={() => setPassword}
                        required
                        placeholder='Enter your password'/>
                </label>

                <label>
                    <p className='font-bold mb-2'>Repeat password</p>
                    <input 
                        className='py-2 px-3 rounded border-[1px] border-gray-300' 
                        type="password" 
                        name="password"
                        // value={repeatPassword}
                        // onChange={() => setRepeatPassword} 
                        required
                        placeholder='Enter your password'/>
                </label>

                <div>
                    <span className='text-gray-500'>Have no account yet?</span>
                    <Link href="/login" className='text-blue-500 hover:underline'> Log in</Link>
                </div>

                <button onClick={() => submit} className='bg-blue-500 text-white text-sm py-2 px-5 rounded'>
                    Sign up
                </button>

                <div className='w-full text-center border-b-gray-300 border-b-2 leading-[0.1em] my-5'>
                    <span className='py-0 px-3 bg-white w-fit'>
                        Or
                    </span>
                </div>

                <button 
                    className='flex items-center gap-5 border-2 border-gray-200 py-2 px-5 rounded' 
                    type='button'
                    onClick={e => {
                        e.preventDefault();
                        signupGithub();
                    }}
                >
                    <FaGithub size={30}/>
                    <span>Sign up with Github</span>
                </button>
                
                <button 
                    className='flex items-center gap-5 border-2 border-gray-200 py-2 px-5 rounded' 
                    type='button'
                    onClick={e => {
                        e.preventDefault();
                        signupGoogle();
                    }}
                >
                    <FcGoogle size={30}/>
                    <span>Sign up with Google</span>
                </button>
            </form>
        </div>
    );
}

export default SignInModal;