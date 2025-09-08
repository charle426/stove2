'use client'
import React, { Suspense } from "react";
import Link from "next/link";
import { collection, addDoc, getDocs, onSnapshot, updateDoc, } from "firebase/firestore";
import { db, storage } from "../../../../../firebaseConfig"
import { doc, deleteDoc, } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid";
import { useRouter } from "next/navigation"
import { ArrowRight, Calendar, Timer } from "lucide-react";
import { useGlobalContext } from "@/app/components/context";
import formatBlogDate from "@/app/components/formatdate";




export default function Admin() {
  const navigate = useRouter()
  const { adminAuth } = useGlobalContext();
  React.useEffect(() => {
    if (!adminAuth) {
      navigate.push("/blog/admin/login");
    }
  }, [adminAuth])

  const blogsCollection = collection(db, "blogs");

  const [adminForm, setAdminForm] = React.useState({
    title: "",
    desc: "",
    isFeatured: false,
  });

  const [file, setFile] = React.useState("");

  const [deleteInfo, setDeleteInfo] = React.useState({
    title: "",
    id: "",
  });

  const [postedBlogs, setPostedBlogs] = React.useState(null);
  const [popUp, setPopUp] = React.useState(false);

  React.useEffect(() => {
    const fetchPostedBlogs = async () => {
      const data = await getDocs(blogsCollection);
      return setPostedBlogs(
        data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          file: doc.data().file,
          isFeatured: doc.data().isFeatured,
          uploadTime: doc.data().uploadTime,
        }))
      );
    };
    fetchPostedBlogs();
  }, []);

  React.useEffect(() => {
    const unsub = onSnapshot(blogsCollection, (snapshot) => {

      const data = snapshot.docs.map((doc) => {
        //  console.log(doc.data())
        const docObj = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          file: doc.data().file,
          isFeatured: doc.data().isFeatured,
          uploadTime: doc.data().uploadTime,
        }
        return docObj
      })
      setPostedBlogs(data)

    });
    return unsub
  }, [])
  const sortData = postedBlogs?.sort((a, b) => b.uploadTime - a.uploadTime)
  const data = sortData?.map((items, index) => {
    const readTime = items.content
    let min = 1;
    if (readTime?.length > 200) {
      min = Math.ceil(readTime.trim().split(/\s+/).length / 200);
    }

    return (
      <div key={index} className="flex flex-col gap-2 items-center">
       <div>
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
            <p className="line-clamp-3 opacity-70 text-sm">
              {items.content}
            </p>
             <div className="text-[0.6rem] mb-1 mt-1 flex justify-between items-center">
              <p className="opacity-60 mt-3 flex gap-1 items-center"><Calendar /> {formatBlogDate(items.uploadTime)}</p>
              <p className="opacity-60 mt-3 flex gap-1 items-center">
                <Timer /> {min} min read
              </p>
            </div>
          </div>
          <Link href={`/blog/${items.id}`} className="flex text-sm items-center gap-1 text-[#006400]"> Read More <ArrowRight /></Link>
        </div>
      </div>
        <div className="flex gap-2 items-center justify-end w-full">
          <Link href={`/blog/admin/edit/${items.id}`}>
            <div className="bg-[#006400] text-white px-6 rounded-lg font-medium text-[18px] py-[2px]">
              Edit
            </div>
          </Link>
          <div
            className="bg-red-600 px-6 text-white rounded-lg font-medium text-[18px] py-[2px] cursor-pointer"
            id={items.id}
            onClick={() => doBoth(items.title, items.id)}
          >
            Delete
          </div>
        </div>
      </div>
    );
  });

  function doBoth(title, id) {
    // DeleteBlog()
    setDeleteInfo({
      title: title,
      id: id,
    });
    return setPopUp(true);
  }

  async function deleteAndReset(e) {
    const deleteId = e.currentTarget.id;
    deleteDoc(doc(db, "blogs", deleteId))
      .then(() => {
        setPopUp(false);
      })
      .catch((err) => console.log(err));
  }

  function DeleteBlog() {
    return (
      <div
        className={
          popUp
            ? "fixed bg-[#0e161e83] w-full h-full z-[1000] top-0 left-0"
            : ""
        }
      >
        <div
          className={
            popUp
              ? "fixed rounded-3 left-[50%] top-[50%] flex flex-col gap-5 -translate-x-[50%] -translate-y-[50%] rounded-md bg-white p-5 duration-500 w-[90%] sm:w-[70%]"
              : " p-5 duration-500 fixed w-0 h-0 overflow-hidden rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
          }
        >
          <p className="text-[#006400]">Are you sure you want to delete :</p>
          <h3 className="font-semibold text-[1.5rem]">{deleteInfo.title}</h3>
          <div className="flex items-center gap-2 sm:flex-nowrap flex-wrap">
            <div
              id={deleteInfo.id}
              className="bg-red-600 px-3 text-white rounded-[3px] cursor-pointer font-medium text-[18px] py-[2px]"
              onClick={deleteAndReset}
            >
              Yes, delete
            </div>
            <div
              className="bg-[#006400] text-white px-3 rounded-[3px] cursor-pointer font-medium text-[18px] py-[2px]"
              onClick={() => setPopUp(false)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  }

 function handleChange(e) {
    const { name, value, checked } = e.target
    setAdminForm(prev => {
      return {
        ...prev,
        [name]: name === "isFeatured" ? checked : value
      }
    })
  }

  // form submit

  function handleFileChange(e) {
    const imgRef = ref(storage, `/images/file${v4()}`);
    const files = e.target.files;
    uploadBytes(imgRef, files?.[0])
      .then((data) => {
        getDownloadURL(data.ref).then((url) => setFile(url));
      })
      .catch((err) => console.log(err));
  }

  async function setSingleFeaturedBlog(featuredBlogId) {
  const snapshot = await getDocs(blogsCollection);
 console.log(featuredBlogId)
  // First, set isFeatured: false for all blogs
  const updatePromises = snapshot.docs.map(blogDoc => {
    const isTarget = blogDoc.id === featuredBlogId;
    return updateDoc(doc(db, "blogs", blogDoc.id), {
      isFeatured: isTarget
    });
  });

  await Promise.all(updatePromises);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, desc, isFeatured } = adminForm;
    if (!title || !desc) return alert("Please fill form properly");

    const formData = {
      title,
      content: desc,
      file,
      isFeatured,
      uploadTime: Date.now(),
    };

   await addDoc(blogsCollection, formData)
      .then((e) => {
        if(isFeatured) setSingleFeaturedBlog(e.id);

        setAdminForm({
          title: "",
          desc: "",
          isFeatured: false,
        });

        alert("Blog Posted")
      })
      .catch((err) => console.log(err));
  };


  return (
    <section className="px-5 md:px-10 py-12 mt-24">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-medium">Welcome Admin</h1>
        <div>
          {postedBlogs ? <p>blogs({postedBlogs.length})</p> : <p>blogs(0)</p>}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 mt-9"
        >
          <div className="flex flex-col md:flex-row">

            <label className="custum-file-upload" htmlFor="fileId">
              <div className="icon">
               {file ? <img src={file} alt="uploaded file" className="h-[120px] w-[120px] object-cover rounded-full" /> :  <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24"><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"> <path fill d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd" /> </g></svg>}
              </div>
              <div className="text">
                <span>  {file ? 'Change image' : 'Click to upload image'}</span>
              </div>
              <input type="file" id="fileId" name="file" onChange={handleFileChange} accept="image/*" />
            </label>
   
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={adminForm.title}
              onChange={handleChange}
              placeholder="blog title"
              className="bg-slate-200 rounded-[10px] w-full p-2"
            />
          </div>

          <div>
            <textarea
              name="desc"
              value={adminForm.desc}
              onChange={handleChange}
              placeholder="Blog Content"
              rows={6}
              className="bg-slate-200 rounded-[10px] w-full p-2"
            ></textarea>
          </div>
          <div className="flex items-center gap-3 mb-5">
          <label htmlFor="checkbox" className="relative h-[3em] w-[3em] rounded-[1.2em] bg-gray-300 shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_2px_4px_0px_#00bdb0]">
            <input type="checkbox" checked={adminForm.isFeatured} onChange={handleChange} name="isFeatured" id="checkbox" className="peer appearance-none" />
            <span className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 rounded-[0.8em] bg-gray-200 shadow-[inset_-1px_1px_4px_0px_#f0fffe,inset_1px_-1px_4px_0px_#00bdb0,-1px_1px_2px_0px_#00bdb0] duration-[200ms] peer-checked:shadow-[inset_1px_-1px_4px_0px_#f0fffe,inset_-1px_1px_4px_0px_#00bdb0]">
            </span>
            <svg fill="#00756d" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
              </g>
            </svg>
            <svg fill="#00756d" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 top-1/2 h-[2em] w-[2em] -translate-x-1/2 -translate-y-1/2 peer-checked:opacity-0">
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z" />
              </g>
            </svg>
          </label>
          <span className="text-lg font-semibold">IsFeatured</span>
        </div>

          <button
            type="submit"
            className="button font-bold mb-20 bg-green-700 text-white max-w-[150px] py-2 hover:opacity-90 duration-200 hover:bg-primary"
          >
            Post
          </button>
        </form>
      </div>

      <Suspense
        fallback={
          <div className="relative w-[300px] h-[300px] rounded-full p-3">
            <div className="h-full w-full loader border-primary border-t-[6px] border-solid animate-spin rounded-full"></div>
          </div>
        }
      >
        <div className="flex flex-wrap mt-10 flex-grow md:justify-center items-start sm:items-center gap-8 *:basis-[95%] sm:*:basis-[45%] lg:*:basis-[30%]">
          {postedBlogs ? (
            data
          ) : (
            <p className="text-[23px] font-semibold">No blogs at this time</p>
          )}{" "}
        </div>
      </Suspense>
      {popUp && <DeleteBlog />}
    </section>
  );
}