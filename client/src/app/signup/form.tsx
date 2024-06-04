'use client'

import { v4 as uuidv4 } from 'uuid';
import { signIn } from 'next-auth/react';

export default function SignupForm() {
    // useEffect(() => {
    //     window.gtag('config', 'G-WJZPSFS6SG', {
    //       send_page_view: false,
    //     });
    
    //     window.gtag('event', 'page_view', {
    //       page_title: 'Sign up page',
    //     })
    //   }, []);
    
    //   useEffect(() => {
    //     if (userId) {
    //       window.gtag('event', 'signup'); 
          
    //       navigate(from);
    //     }
    //   });

    async function submit (data: FormData) {
        const userObj = {...Object.fromEntries(data.entries()), id: uuidv4()}
        
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                credentials: "include",
                headers: { 
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userObj)
            });
            
            console.log({ res });
        } catch (error) {
            console.log(error);
        }   
    }       

    return ( 
        <main className='flex justify-center min-h-screen items-center'>
            <form action={submit} className='border-2 border-yellow-500'>
                <h1 className='font-bold'>SignUp</h1>
                <input name='username' type="text" placeholder='Username'/>
                <input name='email' type="email" required placeholder='Email'/>
                <input name='password' type="password" required placeholder='Password'/>
                <button type="submit">Register</button>

                <button onClick={() => signIn("github", { callbackUrl: "/" })}>
                    Sign up with Github
                </button>

                <button onClick={() => signIn("google", { callbackUrl: "/" })}>
                    Sign up with Github
                </button>
            </form>
            
        </main> 
    )
}