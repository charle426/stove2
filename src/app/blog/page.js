'use client'
import { BlogAll } from "../components/blog";
import Image from 'next/image'
export default function Blog() {


  return (
    <>
      <section className=" bg-cover bg-no-repeat bg-center object-cover overflow-hidden relative">
       
        <div
          className=" bg-cover bg-no-repeat mb-10 object-cover py-10 md:py-40 md:px-10 px-4 duration-500 w-full flex justify-center items-center"
        >
         <div>
           <h1 className="sm:text-5xl text-5xl mb-10 relative z-20 text-[4rem] w-full text-center font-semibold">
            Insights & Inspiration: Stove Africa's Blog
          </h1>
          <p>Dive into our latest news, helpful tips, and comprehensive guides designed to simplify your everyday utility service and inspire a sustainable lifestyle</p>
         </div>
          <div className="w-full">
            <Image
              src="/stove.jpg"
              alt="Stove Africa"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
              </div>
                    <section className="md:px-10 z-20 bg-cover bg-no-repeat bg-center object-cover overflow-hidden md:pb-10 px-2 mb-6 relative">
        <BlogAll />
      </section> 
      </section> 
    </>
  );
}


