import React from 'react';
import { formatDistance } from 'date-fns'
import Link from 'next/link';
import { BiSolidDownvote, BiSolidUpvote, BiCommentDetail } from "react-icons/bi";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import removeMarkdown from 'remove-markdown';

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
    
    return (
        <section className='mb-5'>
            <div className='relative'>
                <FaRegBookmark className='absolute right-0'/>
                <Link className='text-xl' href={`/questions/${id}`}>
                    <h1>{title}</h1>
                </Link>
                <p className='line-clamp-1'>{removeMarkdown(questionBody)}</p>
            </div>
            <div>
                <div className='flex gap-2'>
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
                </div>

                <ul className='flex gap-3 justify-end'>
                    <li className='bg-blue-300 rounded py-1 px-3 text-xs'>c#</li>
                    <li className='bg-blue-300 rounded py-1 px-3 text-xs'>unity</li>
                    <li className='bg-blue-300 rounded py-1 px-3 text-xs'>gamedev</li>
                </ul>
              
                <p>Asked by <Link className='text-blue-600 underline' href={`/users/${username}`}>{username}</Link> {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}</p>
            </div>
        </section>
    )
}

export default Question;