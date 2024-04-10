"use client";
import { useSession } from 'next-auth/react';
import { FaRegBell } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import defaultAvatar from '../../images/default-avatar.svg'
// import UserDropdown from '../UserDropdown';

function Navbar() {
  const { data: session, status } = useSession();
  
  // const toggleMenu = e => {
  //   e.target.style = { 
  //     backgroundImage: 'url(../../images.close-menu-icon.svg)' 
  //   };
    
  //   setIsOpen(isOpen => !isOpen);
  // };

  // useEffect(() => setIsOpen(false), [location.pathname]);
  // useEffect(() => {
  //   const handleClick = (event) => {
  //       navRef.current &&
  //       !navRef.current.contains(event.target) &&
  //       setIsOpen(false);
  //   };

  //   document.addEventListener('mousedown', handleClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, [navRef]);

  return <nav className='p-3 flex justify-between border-b-[1px]'>
      <Image 
        src="/logo.png" 
        width={70}
        height={70}
        alt="logo"/>
      
      <section className='flex items-center'>
        <Link href='/' className='hover:text-blue-600 px-5'>Home</Link>
        <Link href='/questions' className='hover:text-blue-600 border-l-[1px] border-gray-500 px-5'>Questions</Link>
        <Link href='/new-question' className='hover:text-blue-600 border-l-[1px] border-gray-500 px-5'>New question</Link>

        {
          status === "authenticated"? 
          <>
            <div className='flex items-center gap-7 ml-10'>
              {/* <span className='flex gap-3 items-center border-l-[1px] border-gray-500 px-5'>
                <FaRegBell size={20}/>
              </span> */}
              <details>
                <summary className='flex relative items-center gap-2 mr-10 hover:cursor-pointer'>
                  <img className="h-8 rounded-full" src={ session.user.image || defaultAvatar } alt="user profile picture"/>
                  <span className='font-bold'>{ session.user.username || session.user.name }</span>
                </summary>
                <section className='absolute p-5 bg-white shadow-md min-fit right-5 top-12'>
                  <Link href={`/users/${session.id}`} className='flex items-center gap-3'>
                    <MdAccountBox size={20}/>
                    <span className='min-w-fit'>Profile</span>
                  </Link>
                  <button onClick={signOut} className='flex items-center gap-3'>
                    <IoMdExit size={20}/>
                    <span className='min-w-fit'>Sign out</span>
                  </button>  
                </section>
              </details>
            </div>
          </>
          :
          <>
            <Link href='/login'>
              Log in
            </Link>
            <Link href='/signup'>
              Sign up
            </Link>
          </>
        }        
      </section>
  </nav>;
}

export default Navbar;