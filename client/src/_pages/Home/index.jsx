import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { TbMessage2Question } from "react-icons/tb";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GrArticle } from "react-icons/gr";
import Image from 'next/image';
import homepageImg from '../../images/homepage.svg';
import articlesImg from '../../images/articles.svg';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function index() {
    // useEffect(() => {
    //     window.gtag('config', 'G-WJZPSFS6SG', {
    //         send_page_view: false,
    //     });

    //     window.gtag('event', 'page_view', {
    //         page_title: 'Homepage',
    //     })
    // }, [])
    
    return <>
        <Navbar/>
        
        <main className="min-h-full">
            <Header/>

            <div className='max-w-7xl items-center m-auto'>                
                <p className="text-center text-2xl font-bold">What you can do here?</p>
                
                <section className='flex flex-wrap items-center gap-8 justify-center text-sm pb-5'>
                    <div>
                        <div className='py-5 px-10 border border-gray max-w-sm bg-white mb-5'>
                            <TbMessage2Question size={46} color='blue' className='bg-gray-100 p-3 rounded'/>

                            <h3 className='font-bold my-2'>
                                Ask questions
                            </h3>
                            
                            <p>If you can't find solution, you may ask other developers about your specific problem</p>
                        </div>
                        
                        <div className='py-5 px-10 border border-gray max-w-sm bg-white mb-5'>
                            <LiaHandsHelpingSolid size={46} color='blue' className='bg-gray-100 p-3 rounded'/>

                            <h3 className='font-bold my-2'>
                                Help others
                            </h3>
                            
                            <p>Know solution to the problem? Help by providing the answer</p>
                        </div>   
                    </div>

                    <Image src={homepageImg} className="w-1/2" alt='homepage illustration'/>
                </section>

                <section className='flex flex-wrap items-center gap-8 justify-center text-sm pb-10'>
                    <Image src={articlesImg} className="w-2/5" alt='articles illustration'/>

                    <div>
                        <div className='py-5 px-10 border border-gray rounded max-w-sm bg-white mb-5'>
                            <FaSearch size={46} color='blue' className='bg-gray-100 p-3 rounded'/>

                            <h3 className='font-bold my-2'>
                                Find answers
                            </h3>
                            
                            <p>Stuck with the problem? Chances are someone already asked for help</p>
                        </div>
                        

                        <div className='py-5 px-10 border border-gray rounded max-w-sm bg-white mb-5'>
                            <GrArticle size={46} color='blue' className='bg-gray-100 p-3 rounded'/>

                            <h3 className='font-bold my-2'>
                                Read articles
                            </h3>
                            
                            <p>Dozens of posts related to your field of expertise.</p>
                        </div>
                        
                    </div>
                </section>
            </div>

            <div>

            </div>

            <div className="bg-gray-100 w-full p-20">
                <p className="font-bold text-3xl">Got interested?</p>

                <Link href='/sign-up' className='inline-block font-bold max-w-fit'>
                    Create an account
                </Link>
            </div>
        </main>

        <Footer/>
    </>
}

export default index