// 'use client'
import type { Metadata } from 'next';
// import { NavLink, Outlet } from 'react-router-dom';
import QuestionsList from '../../components/QuestionsList';
// import SubscribeSection from '../../components/SubscribeSection';
import MainLayout from '../../components/MainLayout';
// import styles from '../../pages/BrowseQuestions/BrowseQuestions.module.sass';

export const metadata: Metadata = {
  title: 'Askme | Questions',
  description: 'Browse questions',
}

function BrowseQuestions() {
  // useEffect(() => {
  //   window.gtag('config', 'G-WJZPSFS6SG', {
  //     send_page_view: false,
  //   });

  //   window.gtag('event', 'page_view', {
  //     page_title: 'Questions page',
  //   })
  // }, [])

  return <>
    <MainLayout>
      <QuestionsList/>
    </MainLayout>
  </>
}

export default BrowseQuestions 