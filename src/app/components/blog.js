"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useGlobalContext } from "./context";
import { ArrowRight, Calendar, Timer } from "lucide-react";
import formatBlogDate from "./formatdate";




export function FeaturedBlog() {
  const {server} = useGlobalContext()
 const sortData = Array.isArray(server) ? [...server].sort((a, b) => b.uploadTime - a.uploadTime) : [];

  const findFeatured = sortData?.find(item => item.isFeatured === true)
  console.log(findFeatured)
    const readTime = findFeatured?.content;
    let min = 1;
    if (readTime?.length > 200) {
      min = Math.ceil(readTime?.trim().split(/\s+/).length / 200);
    }

   if(findFeatured){
     return (
      <section className="flex justify-center items-center w-full px-3">
        <Suspense
          fallback={
              <div className="relative w-[300px] h-[300px] rounded-full p-3">
                <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
              </div>
            }
          >
            <div className="flex justify-center items-center gap-x-8 gap-y-16 w-full bg-green-200 px-5 py-10 rounded-2xl">
                <div>
          <div className="cursor-pointer group duration-200 flex-col md:flex-row gap-10 items-center justify-between flex">
            <div className=" w-full ">
            <img
              src={findFeatured?.file}
              alt="blog-image"
              width="100%"
              className="duration-200 drop-shadow-xl rounded-2xl "
            />
          </div>
          <div className="relative p-3 w-full">
            <h1
              id={findFeatured?.title}
              className="font-bold md:text-2xl text-md duration-200 group-hover:text-[#006400] sm:text-lg"
            >
              {findFeatured?.title}
            </h1>
            <p className="line-clamp-3 text-sm">
              {findFeatured?.content}
            </p>
             <div className="text-xs mb-1 mt-1 flex justify-between items-center">
              <p className="opacity-60 mt-3 flex gap-1 items-center"><Calendar /> {formatBlogDate(findFeatured?.uploadTime)}</p>
              <p className="opacity-60 mt-3 flex gap-1 items-center">
                <Timer /> {min} min read
              </p>
            </div>
          <Link href={`/blog/${findFeatured?.id}`} className="flex items-center text-xs font-bold gap-1 mt-10 text-[#006400]"> Read More <ArrowRight /></Link>
          </div>
        </div>
      </div>
            </div>
          </Suspense>
        </section>
      );
   }
  };





export function BlogAll() {
  const {server} = useGlobalContext()
  console.log(server)
  const sortData = server?.sort(
    (a, b) => b.uploadTime - a.uploadTime
  );
  
  const data = sortData?.map((items, index) => {
    const readTime = items.content;
    let min = 1;
    if (readTime.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }
    
    return (
      <div key={index}>
        <div className="cursor-pointer group duration-200 flex-col flex">
          <div className="h-[250px] rounded-t-[20px] w-full overflow-hidden">
            <img
              src={items.file}
              alt="blog-image"
              width="100%"
              className="duration-200 drop-shadow-xl "
            />
          </div>
          <div className="relative p-3 w-full">
            <h1
              id={items.title}
              className="font-bold text-md duration-200 group-hover:text-[#006400] sm:text-lg"
            >
              {items.title}
            </h1>
            <p className="line-clamp-3 text-sm">
              {items.content}
            </p>
             <div className="text-xs mb-1 mt-1 flex justify-between items-center">
              <p className="opacity-60 mt-3 flex gap-1 items-center"><Calendar /> {formatBlogDate(items.uploadTime)}</p>
              <p className="opacity-60 mt-3 flex gap-1 items-center">
                <Timer /> {min} min read
              </p>
            </div>
          </div>
          <Link href={`/blog/${items.id}`} className="flex items-center gap-1 text-[#006400]"> Read More <ArrowRight /></Link>
        </div>
      </div>
    );
  });

  return (
    <section className="flex justify-center items-center w-full px-3">
      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="">
          {server?.length ? <section><FeaturedBlog/> <div className="flex flex-wrap flex-grow lg:justify-center items-center gap-x-8 gap-y-16 *:basis-[100%] sm:*:basis-[40%] lg:*:basis-[30%]">{data}</div></section> : <p className="font-medium">there are no blogs at this time</p>}
        </div>
      </Suspense>
    </section>
  );
}



export function BlogSome() {
  const { server } = useGlobalContext();
  console.log(server)
  const sortData = server?.sort(
    (a, b) => b.uploadTime - a.uploadTime
  );
  console.log(sortData)
  const someBlog = sortData?.slice(0, 3)
  const data = someBlog?.map((items, index) => {
    const readTime = items.content;
    let min = 1;
    if (readTime.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }

    return (
      <div key={index}>
        <div className="cursor-pointer group duration-200 flex-col flex">
          <div className="h-[250px] rounded-t-[20px] w-full overflow-hidden">
            <img
              src={items.file}
              alt="blog-image"
              width="100%"
              className="duration-200 drop-shadow-xl"
            />
          </div>
          <div className="relative p-3 w-full">
            <h1
              id={items.title}
              className="font-medium text-lg duration-200 group-hover:text-primary sm:text-xl"
            >
              {items.title}
            </h1>
            <p className="line-clamp-2">{items.content}</p>
          <div className="text-xs mb-1 mt-1 flex justify-between items-center">
              <p className="opacity-60 mt-3 flex gap-1 items-center"><Calendar /> {formatBlogDate(items.uploadTime)}</p>
              <p className="opacity-60 mt-3 flex gap-1 items-center">
                <Timer /> {min} min read
              </p>
            </div>
          </div>
           <Link href={`/blog/${items.id}`} className="flex items-center gap-1 text-[#006400]"> Read More <ArrowRight /></Link>
        </div>
      </div>
    );
  });


  return (
    <section className="flex justify-center py-10 flex-col gap-5 px-5">
      {/* <h2 className="font-medium text-4xl">Articles</h2> */}
      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="flex flex-wrap flex-grow lg:justify-center items-center gap-x-8 gap-y-16 *:basis-[100%] sm:*:basis-[40%] lg:*:basis-[30%]">
          {server?.length ? (
            data
          ) : (
            <p className="font-medium">there are no blogs at this time</p>
          )}
        </div>
      </Suspense>
      <div className="w-full flex justify-center items-center my-5">

  <Link href="/blog" className='flex w-full items-start'>
      <button className="rounded-xl px-6 py-3 font-bold bg-[#006400] text-white" >
          Blogs
      </button>
      </Link>
      </div>
    </section>
  );
}