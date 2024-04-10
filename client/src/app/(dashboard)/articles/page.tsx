import type { Metadata } from 'next';
import MainLayout from '../../../components/MainLayout';
import Article from './article';

export const metadata: Metadata = {
  title: 'Askme Blog',
  description: 'Programming related articles by Askme',
}

function Blog() {
  return (
    <>
      <h1 className='font-bold text-2xl mb-5'>Browse articles</h1>
      <ul className='grid grid-cols-2 gap-5'>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
      </ul>
    </>
  )
}

export default Blog;