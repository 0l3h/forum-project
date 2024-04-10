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
        <Navbar/>

        <main className='grid xl:grid-cols-4 grid-cols-1 pt-0 xl:pt-10 bg-gray-100 justify-items-center min-h-screen'>
            <SideMenu/>
            <section className='sm:col-span-4 md:col-span-2 w-full'>
                <div className="py-3 bg-white px-5 mb-5 flex gap-2">
                    <Link href="/" className="text">Home</Link>
                    <span>/</span>
                    <Link href="/questions">Questions</Link>
                </div>
                <div className="bg-white">
                    {children}
                </div>
            </section>
            
            <div className='w-full xl:w-3/4'>
                <PopularQuestions/>
                <TopUsers/>
                <div className='bg-white p-5 mt-0 hidden xl:block xl:mt-5'>
                    <span className="mb-5 inline-block font-bold">Popular tags</span>

                    <ul className="flex flex-wrap gap-3">
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">c#</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">js</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">android</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">java</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">sql</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">figma</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">c++</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">AI/ML</li>
                        <li className="py-1 px-2 rounded bg-sky-300 text-sm">python</li>
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