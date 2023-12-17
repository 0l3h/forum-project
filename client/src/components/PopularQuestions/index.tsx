'use client'
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaFire } from "react-icons/fa6";
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { getPopularQuestionsRequest } from '../../slices/popularQuestions.slice';
// import flameIcon from '../../images/flame.png';
import Link from 'next/link';
import Image from 'next/image';
// import styles from './PopularQuestions.module.sass';

function PopularQuestions() {
  // const popularQuestions = useSelector(state => state.popularQuestions.data);
  const popularQuestions = [
    {
      title: "Error: unknown token '^' at line 13:92"
    },
    {
      title: "How to create a bash script"
    },
    {
      title: "Got a problem with setting up jvm, anyone can help?"
    }
  ];
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getPopularQuestionsRequest());
  // }, [])

  return (
    <section className='bg-white p-5 align-middle mb-5'>
      <FaFire size={20} className='inline-block mr-3 text-red-500'/>
      <h2 className='font-bold inline-block'>Most discussed</h2>
       
      <ul className='flex flex-col mt-3'>
        {
          popularQuestions.map(question => (
            <Link key={uuidv4()} className='truncate' href={`/browse-questions/${question.id}`}>{question.title}</Link>
          )) 
        }
      </ul>
    </section>
  )
}

export default PopularQuestions;