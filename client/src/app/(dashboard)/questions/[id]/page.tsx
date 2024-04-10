import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
// import Image from 'next/image';
import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';

import defaultAvatar from '../../../../images/default-avatar.svg';
import Answer from '../../../../components/Answer';
import Form from './form';

function Question() {
  const question = {
    title: "Stuck with ruby error, got Error: unknown file compression format", 
    questionBody: "I have a game which should have a network request to a remote server, but I constantly get an error with a host and dataabase configuration settings",
    createdAt: "2023-10-03", 
    views_amount: 17,
    votesValue: 3,
    user: {
      profilePictureUrl: '../../images/portrait-1.jpg',
      username: "oleks4ndra"
    },
    answers: []
  }
    
  return <>
    <h1 className='font-bold text-2xl mb-2'>{question.title}</h1>

    <div className='flex gap-3 text-sm mb-5'>
      <span>asked {question.createdAt && formatDistance(new Date(question.createdAt), new Date(), { addSuffix: true })}</span>
      <span>viewed {question.views_amount} times</span>
      <span>{question.votesValue || 0} upvotes</span>
    </div>

    <div>
      <section>
          <div>
            <ReactMarkdown>
              {question.questionBody}
            </ReactMarkdown>
          </div>

          <div>
            {/* <div>
                <button onClick={(e) => voteQuestion(1)}>Upvote</button>
                <button onClick={(e) => voteQuestion(-1)}>Downvote</button>
            </div> */}
          </div>

          <div>
            <div>
              <img src={defaultAvatar} alt="user avatar" />
            </div>
            <span>{question?.user?.username}</span>
          </div>
      </section>

      <h2>{question?.answers?.length || 0} answer(s)</h2>

      <section>
        <ul>
          {/* // question?.answers?.length?
          // question.answers.map((answer) => (
            // <Answer answer={answer} key={uuidv4()}/>
          // ))
          // : */}
          {/* <Image className='max-w-xs' src={noAnswers} alt='not found image'/> */}
          <p>No one has answered this question yet.</p>
        </ul>
      </section>
      
      <Form/>
      {/* {
        status === "authenticated" &&
        <button className='bg-red-400 rounded flex gap-3 items-center py-2 px-3'>
          <FaRegTrashAlt/>
          <span>Delete</span>
        </button>
      }     */}
    </div>
  </>
}

export default Question;