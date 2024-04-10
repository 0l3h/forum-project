import React from 'react';
import Image from 'next/image';
import { formatDistance } from 'date-fns'
import Link from 'next/link';
import { BiSolidDownvote, BiSolidUpvote, BiCommentDetail } from "react-icons/bi";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import removeMarkdown from 'remove-markdown';
import defaultAvatar from "../../images/portrait-1.jpg";

function Question(props) {
    const { 
        question: { 
            id,
            title, 
            questionBody,
            createdAt, 
            views_amount,
            votesValue,
            user: {
                profilePictureUrl,
                username
            }
    }} = props;

    console.log(props);
    
    return (
        <section className='mb-5 border-t-2 pt-5'>
            <div className='relative flex gap-5 z-0'>
                <Image width={70} className='rounded aspect-square object-cover' src={defaultAvatar} alt="author image"/>
                <div className='w-full'>
                    <FaRegBookmark size={20} className='absolute right-0'/>
                    <Link className='text-xl' href={`/questions/${id}`}>
                        <h1>{title}</h1>
                    </Link>
                    <p className='line-clamp-1 text-gray-600'>{removeMarkdown(questionBody)}</p>

                    <div className='flex gap-2 text-gray-500 w-full'>
                        <div>
                            <FaEye className='inline-block mr-2'/>
                            <span className='text-sm'>{views_amount}</span>
                        </div>

                        <div>
                            <BiSolidUpvote className='inline-block mr-2'/>
                            <span className='text-sm'>{votesValue || 0}</span>
                        </div>
                        
                        <div>
                            <BiSolidDownvote className='inline-block mr-2'/>
                            <span className='text-sm'>{votesValue || 0}</span>
                        </div>

                        <div>
                            <BiCommentDetail className='inline-block mr-2'/>
                            <span className='text-sm'>0</span> 
                        </div>
                        <span className='text-sm ml-auto'>
                            Asked by {' '} 
                            <Link className='text-blue-600 underline' href={`/users/${username}`}>
                                caleb.dev
                            </Link> {' '}
                            {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}
                        </span>
                    </div>
                    
                </div>
                
            </div>
            <ul className='flex gap-3 justify-end ml-auto'>
                <li className='text-blue-700 text-sm font-bold rounded'>#rust</li>
                <li className='text-blue-700 text-sm font-bold rounded'>#database</li>
                <li className='text-blue-700 text-sm font-bold rounded'>#sql</li>
            </ul>
            <div>
              
                {/* <p> 
                    
                </p> */}
            </div>
        </section>
    )
}

export default Question;