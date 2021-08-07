import React from 'react';
import Head from 'next/head';
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div  className="sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:flex justify-between h-screen">
          <Head>
            <title>Hulu - Register</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="px-20 py-10 bg-gradient-to-bl from-[#34A89A] flex flex-col justify-center items-center w-1/3" style={{backgroundColor: "#44b390"}}>
            <h2 className="font-bold text-white text-6xl mb-10">One Of Us</h2>
            <p className="text-white text-xl">If you already have an account,</p>
            <p className="text-white text-xl mb-10">just sign in. We have missed you!</p>
            <button className="text-black text-lg bg-white rounded-full px-20 py-3 font-medium border-none outline-none hover:drop-shadow-2xl hover:text-[#44b390]" type="button">Sign in</button>
          </div>
          <div className="bg-white px-20 py-10 flex flex-col justify-center items-center w-2/3">
            <h2 className="font-bold text-6xl text-[#06202A] mb-3">Create Free Account</h2>
            <p className="font-bold text-[#06202A] text-xl mb-3">Login using social networks</p>
            <div className="flex justify-around">
                <button className="font-bold h-12 w-12 rounded-full bg-blue-600 text-white hover:scale-110 mr-3">f</button>
                <button className="font-bold h-12 w-12 rounded-full bg-red-600 text-white hover:scale-110 mr-3">G+</button>
                <button className="font-bold h-12 w-12 rounded-full bg-purple-800 text-white hover:scale-110 mb-8">in</button>
            </div>
            <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)} id="#form">
                <div>
                    <input className="mb-5 mr-5 pl-10 py-3 rounded-full w-96 border-none outline-none text-[#06202A] text-lg bg-[#F2F7F5]" type="text" placeholder="Firstname" name="firstname" />
                    <input className="mb-5 pl-10 py-3 rounded-full w-96 border-none outline-none text-[#06202A] text-lg bg-[#F2F7F5]" type="text" placeholder="Lastname" name="lastname" />
                </div>
                <div>
                    <input className="mb-5 mr-5 pl-10 py-3 rounded-full w-96 border-none outline-none text-[#06202A] text-lg bg-[#F2F7F5]" type="email" placeholder="Email" name="email" />
                    <input className="mb-5 pl-10 py-3 rounded-full w-96 border-none outline-none text-[#06202A] text-lg bg-[#F2F7F5]" type="password" placeholder="Password" name="password" />
                </div>
                <div className="mb-5 text-[#06202A]">
                    <input className="mr-2" type="checkbox" name="checkbox" />I have read the Term & Conditions
                </div>
                <button className="text-white text-lg bg-[#34A89A] rounded-full px-24 py-3 font-medium border-none outline-none hover:drop-shadow-2xl hover:bg-[#44b390]" type="button">Sign up</button>
            </form>
          </div>
        </div>
    )
}

export default Register;
