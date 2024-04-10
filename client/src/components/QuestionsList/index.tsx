'use client'
import { v4 as uuidv4 } from 'uuid';
import Question from '../Question';
import Filter from '../Filter';

async function QuestionsList() {
    const questions = JSON.parse(await (await fetch('http://localhost:5000/browse-questions')).json());

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
    
    return <>
        <div className='flex justify-between mb-5 '>
            <h1 className='font-bold text-2xl'>Browse questions</h1>
            <Filter/>
        </div>

        {
            questions.length?
            questions?.map(q => {
                return <Question key={uuidv4()} question={q}/>;
            })
            :
            <div>No questions have been asked yet</div>
        }
    </>
};

export default QuestionsList;