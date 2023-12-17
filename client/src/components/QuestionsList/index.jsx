// import React, { useEffect } from 'react';
'use client'
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionsRequest } from '../../slices/questions.slice';
import Question from '../../components/Question';
import LoadingSpinner from './../LoadingSpinner';
import Filter from '../Filter'
import { getQuestions } from '../../api';

function QuestionsList() {
    // const questions = useSelector(state => state.questions.questionPosts);
    // const isFetching = useSelector(state => state.questions.isFetching);

    // const { 
    //     id, 
    //     question: { 
    //         title, 
    //         questionBody,
    //         createdAt, 
    //         views_amount,
    //         votesValue,
    //         user: {
    //             profilePictureUrl,
    //             username
    //         }
    // }} = props;

    // const queryClient = useQueryClient();
    const query = useQuery({ queryKey: ['questions'], queryFn: getQuestions});

    const questions = [
        {           
            title: "Help needed with Unity game", 
            questionBody: "I have a game which should have a network request to a remote server",
            createdAt: "2020-10-03", 
            views_amount: 17,
            votesValue: 3,
            user: {
                profilePictureUrl: '../../images/portrait-1.jpg',
                username: "Valentyn"
            }
        },
        {
            title: "Stuck with ruby error, got Error: unknown file compression format", 
            questionBody: "I have a game which should have a network request to a remote server",
            createdAt: "2023-10-03", 
            views_amount: 17,
            votesValue: 3,
            user: {
                profilePictureUrl: '../../images/portrait-1.jpg',
                username: "oleks4ndra"
            }
        },
        {
            title: "Help needed with Unity game", 
            questionBody: "I have a game which should have a network request to a remote server",
            createdAt: "2015-10-03", 
            views_amount: 17,
            votesValue: 3,
            user: {
                profilePictureUrl: '../../images/portrait-1.jpg',
                username: "dima"
            }
        },
        {
            title: "Stuck with ruby error, got Error: unknown file compression format", 
            questionBody: "I have a game which should have a network request to a remote server",
            createdAt: "2023-10-03", 
            views_amount: 17,
            votesValue: 3,
            user: {
                profilePictureUrl: '../../images/portrait-1.jpg',
                username: "oleks4ndra"
            }
        },
        {
            title: "Help needed with Unity game", 
            questionBody: "I have a game which should have a network request to a remote server",
            createdAt: "2015-10-03", 
            views_amount: 17,
            votesValue: 3,
            user: {
                profilePictureUrl: '../../images/portrait-1.jpg',
                username: "dima"
            }
        }
    ];

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getQuestionsRequest());
    // }, []);

    // if(isFetching) {
        // return <LoadingSpinner/>
    // } else {
        return <>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-2xl'>Browse questions</h1>
                    <Filter/>
                </div>

                {

                    query?.data? 
                    query?.data.map(q => {
                        console.log(query)
                        return <Question key={uuidv4()} question={q}/>;
                    })
                    :
                    <div>No questions have been asked yet</div>
                }
        </>
    // }    
};

export default QuestionsList;