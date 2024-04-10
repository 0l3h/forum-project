import type { Metadata } from 'next';
import QuestionsList from '../../../components/QuestionsList';

export const metadata: Metadata = {
  title: 'Askme | Questions',
  description: 'Browse questions',
}

async function BrowseQuestions() {
  // useEffect(() => {
  //   window.gtag('config', 'G-WJZPSFS6SG', {
  //     send_page_view: false,
  //   });

  //   window.gtag('event', 'page_view', {
  //     page_title: 'Questions page',
  //   })
  // }, [])

  return <QuestionsList/>;
}

export default BrowseQuestions 