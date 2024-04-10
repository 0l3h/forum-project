import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import routesImage from '../../../images/routes.jpg';

function Article() {
  return (
    <li>
        <div className='overflow-hidden max-h-52'>
        <Image height={300} loading='lazy' src={routesImage} alt='blog image'/>
        </div>
        <h1 className='font-bold text-2xl my-3'>A right technology for your project</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis explicabo eius, eaque repudiandae voluptatem? Praesentium eius voluptatum asperiores molestias blanditiis aliquid, magnam odit unde rem neque</p>
        <button className="bg-blue-500 ml-auto mt-5 flex py-3 px-5 text-xs text-white rounded-full items-center">
            <FaArrowRight size={16}/>
            <span className="inline-block underline hover:no-underline ml-3">Read article</span>
        </button>
    </li>
  );
}

export default Article;