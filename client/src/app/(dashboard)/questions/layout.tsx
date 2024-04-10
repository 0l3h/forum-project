import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';
import QuestionsList from '../../../components/QuestionsList';
import MainLayout from '../../../components/MainLayout';

export const metadata: Metadata = {
  title: 'Askme | Questions',
  description: 'Browse questions',
}

async function BrowseQuestions({ children } : { children: React.ReactNode }) {
  return <>
    <Suspense fallback={<Loading/>}>
      <div className='p-10'>
        {children}
      </div>
    </Suspense>
  </>
}

export default BrowseQuestions;