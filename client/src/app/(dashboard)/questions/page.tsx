'use client'
import { v4 as uuidv4 } from 'uuid';
import Question from '../../../components/Question';
import Filter from '../../../components/Filter';

async function BrowseQuestions({ params }: { params: { page: string, limit: string } }) {
  const questions = JSON.parse(await (await fetch(`http://localhost:5000/browse-questions?page=${params.page}&limit=${params.limit}`)).json());
  
  // useEffect(() => {
  //   window.gtag('config', 'G-WJZPSFS6SG', {
  //     send_page_view: false,
  //   });

  //   window.gtag('event', 'page_view', {
  //     page_title: 'Questions page',
  //   })
  // }, [])

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

export default BrowseQuestions 