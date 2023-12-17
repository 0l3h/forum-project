import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TiLockClosed } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import { Formik, Form } from 'formik';
// import Image from 'next/image';
// import { useParams } from 'react-router';
// import { NavLink, useNavigate } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';
// import noAnswers from '../../../images/undraw_void_-3-ggu.svg'
// import schemas from '../../validation/validationSchema';
// import TextInput from '../../components/TextInput';

// import { 
//     getQuestionByIdRequest, 
//     voteQuestionRequest, 
//     createAnswerRequest, 
// } from '../../slices/question.slice';

import defaultAvatar from '../../../images/default-avatar.svg';
import Answer from '../../../components/Answer';
import MainLayout from '../../../components/MainLayout';

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
    // const { questionId } = useParams();
    // const question = useSelector(state => state.question.questionPost);
    // const isFetching = useSelector(state => state.question.isFetching);
    // const userData = useSelector(state => state.user.userData);
    const userAvatar = question?.user?.profilePictureUrl || defaultAvatar;
    // const navigate = useNavigate();

    const userData = {};

    const initialValues = {
        answer: ''
    };

    // const dispatch = useDispatch();

    const postAnswer = values => {
      // dispatch(createAnswerRequest({ ...values, questionId }));
      // dispatch(getQuestionByIdRequest(questionId));
    };

    const voteQuestion = (vote) => {
        // if(!userData.id) {
        //     console.log(navigate);
        //     return navigate('/log-in');
        // }
        
        // dispatch(voteQuestionRequest({ questionId, vote }));
    };
    
    // useEffect(() => {
    //     dispatch(getQuestionByIdRequest(questionId));
    // }, [questionId]);

    // if(isFetching) {
    //     return <LoadingSpinner/>
    // }
    // else {
      return <>
        <MainLayout>
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
                    <img src={userAvatar} alt="user avatar" />
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
            
            {
              userData.id === question.authorId &&
              
              <button className='bg-red-400 rounded flex gap-3 items-center py-2 px-3'>
                <FaRegTrashAlt/>
                <span>Delete</span>
              </button>
            }    

            {
              userData?.id? 
              <>
                {/* <Formik initialValues={initialValues} onSubmit={postAnswer}>
                  <Form>
                    <h2>Your answer</h2>
                    
                    <input type="answer" />
                
                    <button type="submit">
                        Post
                    </button>
                  </Form>
                </Formik> */}
              </>
              :
              <section>
                                
                <div>           
                  <TiLockClosed color='blue' size={32}/>                 
                  <span>You need to log in to answer this question. </span>

                  <Link href='/log-in'>Log In</Link>
                </div>
              </section>
            }
          </div>
        </MainLayout>
      </>
  // }
}

export default Question;