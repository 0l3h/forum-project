import MainLayout from '../../components/MainLayout';
import Image from 'next/image';
import personPhoto from '../../images/portrait-1.jpg';

function Users() {
  return (
    <MainLayout>
      <h1 className='font-bold text-3xl mb-5'>Users</h1>
      <ul className='grid grid-cols-3 gap-10'>
        <li className='overflow-hidden flex gap-3 items-start'>
          <div className='relative max-w-fit'>
            <Image className='h-14 w-14 rounded-full object-cover ring-2 ring-white' src={personPhoto} alt='user profile picture'/>
            <span className='w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5'></span>
          </div>
          <div>
            <p className='font-bold'>John Spencer</p>
            <p>some other info</p>
          </div>
          <button className='text-gray-700'>Follow</button>
        </li>
        <li className='overflow-hidden flex gap-3 items-start'>
          <div className='relative max-w-fit'>
            <Image className='h-14 w-14 rounded-full object-cover ring-2 ring-white' src={personPhoto} alt='user profile picture'/>
            <span className='w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5'></span>
          </div>
          <div>
            <p className='font-bold'>John Spencer</p>
            <p>some other info</p>
          </div>
          <button className='text-gray-700'>Follow</button>
        </li>
        <li className='overflow-hidden flex gap-3 items-start'>
          <div className='relative max-w-fit'>
            <Image className='h-14 w-14 rounded-full object-cover ring-2 ring-white' src={personPhoto} alt='user profile picture'/>
            <span className='w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5'></span>
          </div>
          <div>
            <p className='font-bold'>John Spencer</p>
            <p>some other info</p>
          </div>
          <button className='text-gray-700'>Follow</button>
        </li>
        <li className='overflow-hidden flex gap-3 items-start'>
          <div className='relative max-w-fit'>
            <Image className='h-14 w-14 rounded-full object-cover ring-2 ring-white' src={personPhoto} alt='user profile picture'/>
            <span className='w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5'></span>
          </div>
          <div>
            <p className='font-bold'>John Spencer</p>
            <p>some other info</p>
          </div>
          <button className='text-gray-700'>Follow</button>
        </li>
        <li className='overflow-hidden flex gap-3 items-start'>
          <div className='relative max-w-fit'>
            <Image className='h-14 w-14 rounded-full object-cover ring-2 ring-white' src={personPhoto} alt='user profile picture'/>
            <span className='w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5'></span>
          </div>
          <div>
            <p className='font-bold'>John Spencer</p>
            <p>some other info</p>
          </div>
          <button className='text-gray-700'>Follow</button>
        </li>
      </ul>
    </MainLayout>
  )
}

export default Users;