'use client'
import { doc, getDoc,} from "firebase/firestore"
import {Suspense, useEffect, useState} from "react"
import {useParams} from "next/navigation"
import { db } from "../../../../firebaseConfig"
import { BlogSome } from "@/app/components/blog"
export default function Articles() {
  const { id } = useParams()

  const [blog, setBlog] = useState()
    useEffect(() => {
      const blog = doc(db, "blogs", `${id}`)
        const fetchData = async() => {
                   const data = await getDoc(blog);
                   const res = data.data()
                    return setBlog(res);

        }
        fetchData()
        }, [])
    return (
      <section className="md:px-10 px-3 mt-24">
        <Suspense
          fallback={
            <div className="relative w-[300px] h-[300px] rounded-full p-3">
              <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
            </div>
          }
        >
          <div className="max-w-[900px] my-10 mx-auto">
            <div className="mb-2">
              <img
                src={blog?.file}
                alt="blog-image"
                width="100%"
                loading="lazy"
                className="rounded-[20px] mb-2 duration-200"
              />
            </div>
            <div className="mb-5">
              <h1 className="md:text-4xl text-white bg-blue-700 rounded-4xl px-3 py-4 text-3xl font-semibold">{blog?.title}</h1>
            </div>
            <div>
              <p>{blog?.content}</p>
            </div>
          </div>
        </Suspense>

        <h1 className='mt-20 mb-10 font-bold text-3xl'>See more</h1>
        <BlogSome/>
      </section>
    );
}