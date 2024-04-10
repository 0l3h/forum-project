'use client'
// import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import companyLogo from '../../images/askmeLogo.png';

function LogInForm() {
    // useEffect(() => {
    //     if (userId) {
    //         window.gtag('event', 'login');
        
    //         navigate(from);
    //     }
    // });

    // useEffect(() => {
    //     window.gtag('config', 'G-WJZPSFS6SG', {
    //         send_page_view: false,
    //     });

    //     window.gtag('event', 'page_view', {
    //         page_title: 'Login page',
    //     })
    // }, [])

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
        <main className='flex min-h-screen items-center bg-gradient-to-br from-cyan-500 to-blue-600'>
            <div>

            </div>
            <form className='flex flex-col gap-5 shadow-md p-10 bg-white h-fit' action={submit}>
                <Image width={40} src={companyLogo} className='mx-auto' alt="logo"/>

                <h1 className='font-bold text-2xl'>Log in</h1>

                <label>
                    <p className='font-bold mb-2'>Email</p>
                    <input className='py-2 px-3' type="email" name="email" placeholder='Email'/>
                </label>
                
                <label>
                    <p className='font-bold mb-2'>Password</p>
                    <input className='py-2 px-3' type="password" name="password" placeholder='Enter your password'/>
                </label>

                <div>
                    <span className='text-gray-500'>Have no account yet?</span>
                    <Link href="/signup" className='text-blue-500 hover:underline'> Sign up</Link>
                </div>

                {/* {
                    errorMessage && (
                        <div className={styles.errorMessage}>
                            {errorMessage}
                        </div>
                    )
                } */}
                
                <button type="submit" className='bg-blue-500 text-white text-sm py-2 px-5 rounded'>
                    Log in
                </button>

                <button className='flex items-center gap-3 border-2 border-gray-200 py-2 px-5 rounded' onClick={() => signIn("github", { callbackUrl: "/" })}>
                    <FaGithub size={30}/>
                    <span>Log in with Github</span>
                </button>
                
                <button className='flex items-center gap-3 border-2 border-gray-200 py-2 px-5 rounded'>
                    <FcGoogle size={30}/>
                    <span>Log in with Google</span>
                </button>
            </form>
        </main>
    )
}

export default LogInForm;