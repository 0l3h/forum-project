'use client'
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaFire } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

function PopularQuestions() {
  const popularQuestions = [
    {
      title: "Error: unknown token '^' at line 13:92"
    },
    {
      title: "How to create a bash script"
    },
    {
      title: "Got a problem with setting up jvm, anyone can help?"
    },
    {
      title: "Cannot compile C file using gcc"
    }
  ];
  return (
    <section className='bg-white p-5 align-middle hidden xl:block xl:mb-5'>
      <h2 className='font-bold inline-block'>Most discussed</h2>
       
      <ul className='flex flex-col mt-3 gap-3'>
        {
          popularQuestions.map(question => (
            <Link key={uuidv4()} className=' truncate hover:text-blue-600' href={`/browse-questions/${question.id}`}>
              {question.title}
            </Link>
          )) 
        }
      </ul>
    </section>
  )
}

export default PopularQuestions;