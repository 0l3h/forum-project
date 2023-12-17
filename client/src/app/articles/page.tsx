import Image from 'next/image';
import type { Metadata } from 'next'
import MainLayout from '../../components/MainLayout';
import routesImage from '../../images/routes.jpg';

export const metadata: Metadata = {
  title: 'Askme Blog',
  description: 'Programming related articles by Askme',
}

function Blog() {
  return (
    <MainLayout>
      <h1 className='font-bold text-2xl mb-5'>Browse articles</h1>
      <ul className='grid grid-cols-2 gap-5'>
        <li>
          <div className='overflow-hidden max-h-52'>
          <Image src={routesImage} alt='blog image'/>
          </div>
          <h1 className='font-bold text-2xl'>Three ways to handle navigation in React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius, eaque repudiandae voluptatem? Praesentium eius voluptatum asperiores molestias blanditiis aliquid</p>
        </li>
        <li>
          <div className='overflow-hidden max-h-52'>
          <Image src={routesImage} alt='blog image'/>
          </div>
          <h1 className='font-bold text-2xl'>Three ways to handle navigation in React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius, eaque repudiandae voluptatem? Praesentium eius voluptatum asperiores molestias blanditiis aliquid, magnam odit unde rem neque</p>
        </li>
        <li>
          <div className='overflow-hidden max-h-52'>
          <Image src={routesImage} alt='blog image'/>
          </div>
          <h1 className='font-bold text-2xl'>Three ways to handle navigation in React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius</p>
        </li>
        <li>
          <div className='overflow-hidden max-h-52'>
          <Image src={routesImage} alt='blog image'/>
          </div>
          <h1 className='font-bold text-2xl'>Three ways to handle navigation in React</h1>      
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius, eaque repudiandae voluptatem? </p>
        </li>
        <li>  
          <div className='overflow-hidden max-h-52'>
          <Image src={routesImage} alt='blog image'/>
          </div>
          <h1 className='font-bold text-2xl'>Three ways to handle navigation in React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius, eaque repudiandae voluptatem? Praesentium eius voluptatum asperiores molestias blanditiis aliquid, magnam odit unde rem neque</p>
        </li>
      </ul>
    </MainLayout>
  )
}

export default Blog;