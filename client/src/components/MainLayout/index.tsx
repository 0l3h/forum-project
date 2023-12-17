import Link from "next/link";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import PopularQuestions from '../../components/PopularQuestions';
import defaultAvatar from '../../images/default-avatar.svg';
import SideMenu from '../../components/SideMenu';
import TopUsers from '../../components/TopUsers';

function MainLayout({ children }) {
    return <>
        {/* <nav className='flex p-5 bg-cyan-600 justify-between'>
            <h1 className='font-bold text-white text-xl'>Askme</h1>
            <form action="">
                <input className="rounded-md px-4 py-2" placeholder="Search content..." type="search" name='search'/>
                <button type="submit" className="">
                    <IoIosSearch size={26}/>
                </button>
            </form>            
        </nav> */}
        <Navbar/>
        {/* <section className="bg-blue-400">
            <Link href='#'>News</Link>
            <Link href='#'/>
            <Link href='#'/>
        </section> */}

        <main className='grid grid-cols-4 pt-10 bg-gray-100 justify-items-center min-h-screen'>
            <SideMenu/>
            <section className='bg-white col-span-2 w-full p-10'>
                {children}
            </section>
            
            <div className='w-3/4'>
                {/* <div className='bg-white rounded flex flex-col items-center p-5 mb-5'>
                    <Image width={50} height={50} src={defaultAvatar} alt='default avatar'/>
                    <h1>Jack Smithson</h1>
                    <p className='text-gray-500 text-center'>Mobile developer. Create apps with Java and Flutter</p>
                </div> */}
                <PopularQuestions/>
                <TopUsers/>
                <div className='bg-white p-5 mt-5'>
                    <span className="mb-5 inline-block font-bold">Popular tags</span>
                    <Link className="inline-block float-right underline hover:no-underline text-blue-500" href='tags'>See all</Link>

                    <ul className="flex flex-wrap gap-3">
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">c#</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">javascript</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">android</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">rust</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">sql</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">java</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">scala</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">AI/ML</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">R</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">react</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">embedded</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">ui/ux</li>
                    </ul>
                </div>
            </div>
        </main>

        <Footer/>
    </>
}

export default MainLayout;