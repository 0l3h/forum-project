'use client'
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { formatDistance } from 'date-fns';
import defaultAvatar from '../../images/default-avatar.svg';

function Answer({ answer }) {
    const [isUpvoted, setIsUpvoted] = useState(false);
    const [isDownvoted, setIsDownvoted] = useState(false);
    const userData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();
    const { questionId } = useParams();
    const navigate = useNavigate();

    const clickedStyle = {
        color: '#0d92ff',
        fontWeight: 'bold'
    }

    const voteAnswer = (vote, answerId) => {
        if(!userData.id) {
            return navigate('/log-in');
        }

        // dispatch(voteAnswerRequest({ questionId, answerId, vote }));
    };

    const deleteAnswerVote = (voteType) => {
        if (voteType === 'upvote') {
            setIsDownvoted(false);
            setIsUpvoted(true);
        }
        else if (voteType === 'downvote') {
            setIsDownvoted(true);
            setIsUpvoted(false);
        }
    };

    return (
        <li>
            <div>
                <ReactMarkdown>
                    {answer.answerBody}
                </ReactMarkdown>
            </div>

            <div>
                <div>
                    <span>{answer.votesValue || 0} votes</span>
                    
                    <button style={clickedStyle} onClick={ isUpvoted? deleteAnswerVote('upvote') : () => voteAnswer(1, answer.id) }>
                        {isUpvoted? 'Upvoted' : 'Upvote' }
                    </button>
                    
                    <button style={clickedStyle} onClick={ isDownvoted? deleteAnswerVote('downvote') : () => voteAnswer(-1, answer.id) }>
                        {isDownvoted? 'Downvoted' : 'Downvote' }
                    </button>
                </div>

                <div>
                    <span>answered {answer.createdAt && formatDistance(new Date(answer.createdAt), new Date(), { addSuffix: true })}</span>
                    
                    <section>
                        <div>
                            <img src={answer.user.profilePictureUrl || defaultAvatar} alt="user avatar"/>
                        </div>
                        
                        <span>{answer.user.username}</span>
                    </section>
                </div>
            </div>
        </li>
    )
}

export default Answer