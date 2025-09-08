'use client'
import React, { useState, useRef, } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "next/navigation"
import { EyeOff } from "lucide-react";
import { useGlobalContext } from "@/app/components/context";
import Image from "next/image"; 


export default function AdminLogin() {
    const { setAdminAuth } = useGlobalContext();

    const passwordRef = useRef()
    function seePassword() {
        if (passwordRef.current?.type === "password") {
            passwordRef.current.type = "text";
        } else {
            passwordRef.current.type = "password";
        }
    }
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
    console.log(userCredential.user)
          setAdminAuth(true)
          navigate.push("/blog/admin/234813649");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage + "code" + errorCode)
      });
  }
  return (
    <section className="my-20 p-5">
      <div className="flex justify-center rounded-xl items-center flex-col gap-10 w-full">
        <div className="items-center justify-center h-[100px] w-[100px] p-7 rounded-full bg-white origin-center">
          <Image src='/logo.png' alt="logo" width={200} height={80} loading="lazy" className="md:w-[200px] w-[140px]" />
        </div>
       <div id="login" className="w-72 h-84 bg-blue-50 rounded shadow flex flex-col justify-between p-3">       
      <form className="text-[#000080]" action onSubmit={handleSubmit}>
        <fieldset className="border-4 border-dotted h-76 border-[#000080] rounded-2xl p-5">
          <legend className="px-2 italic -mx-2 font-bold">Welcome again!</legend>
          <label className="text-xs font-medium after:content-['*'] after:text-red-400" htmlFor="email">Email </label>     
          <input className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#000080]" type="email" required onChange={handleChange} value={login.email} name='email' />   
          <label className="text-xs font-medium after:content-['*'] after:text-red-400" htmlFor="password">Password</label>
          <div className='relative'>
          <input className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-[#000080]" type="password" required onChange={handleChange} value={login.password} name='password' ref={passwordRef} />
            <EyeOff className='absolute right-0 top-2.5 cursor-pointer' onClick={seePassword}/>
          </div>
          <button className="w-full rounded-2xl duration-2 bg-[#000080] text-indigo-50 p-2 text-center font-bold hover:bg-[#006400]">Log In</button>
        </fieldset>
      </form>
    </div>
      </div>
    </section>
  );
}