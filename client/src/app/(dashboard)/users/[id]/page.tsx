"use client";
import Image from "next/image";
// import personPhoto from '../../../images/portrait-1.jpg';
import { useSession } from 'next-auth/react';

function UserPage() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <div  className="relative h-44 bg-gray-50">
        <button>
          
        </button>
        <img className="h-32 rounded-lg absolute mx-auto -bottom-8 left-5" src={session?.picture}/>
      </div>
      <h1 className="mt-12 ml-5 text-3xl font-bold">{session?.name}</h1>
    </>
  )
}

export default UserPage;