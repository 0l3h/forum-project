'use client'
import { GrHelpBook } from "react-icons/gr";
// import MenuLink from '../MenuLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdArticle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { TbWorldQuestion } from "react-icons/tb";
// import styles from './SideMenu.module.sass';

function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="relative">
      <section className='fixed flex flex-col gap-5'>
        <span className='font-bold'>Menu</span>

        <div className={`${pathname === "/questions"? 'text-blue-700 font-bold' : ''}`}>
          <TbWorldQuestion className='text-gray-600 inline mr-4' size={24}/>
          <Link href='/questions'>All questions</Link>
        </div>
        
        <div className={`${pathname === "/articles"? 'text-blue-700 font-bold' : ''}`}>
          <MdArticle className='text-gray-600 inline mr-4' size={24}/> 
          <Link href='/articles'>Articles</Link>
        </div>
        
        <div className={`${pathname === "/discussions"? 'text-blue-700 font-bold' : ''}`}>
          <MdOutlineQuestionAnswer className='text-gray-600 inline mr-4' size={24}/>
          <Link href='/discussions'>Discussions</Link>
        </div>
        
        <div className={`${pathname === "/users"? 'text-blue-700 font-bold' : ''}`}>
          <FaUsers className='text-gray-600 inline mr-4' size={24}/>
          <Link href='/users'>Users</Link>
        </div>
        
        <div className={`${pathname === "/faq"? 'text-blue-700 font-bold' : ''}`}>
          <GrHelpBook className='text-gray-600 inline mr-4' size={24}/>
          <Link href='/faq'>FAQ</Link>
        </div>
      </section>
    </div>
  )
}

export default SideMenu;