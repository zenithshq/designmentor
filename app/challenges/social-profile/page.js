'use client'

import React from "react";
import Image from "next/image";

import Link from "next/link";
import Footer from "../../../components/Footer"

import '/app/app.css';

export default function Page () {
    const handleRedirect = () => {
        window.location.href = '/style-guide.md';
    };
    return (
        <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14">
            <header className="text-gray-600 body-font pt-4 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-xl font-bold underlined-2">Design Mentor</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/">Home</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/challenges">Challenges</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/team">Team</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/articles">Articles</a>
                    </nav>
                    
                </div>
            </header>

            <div className="pt-16 grid grid-cols-2 px-4 gap-20">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">Social Profile</h1>
                    <div className="flex gap-4 pt-3 text-l">
                            <h2 className="font-bold text-sky-500">HTML</h2>
                            <h2 className="font-bold text-red-400">CSS</h2>
                    </div>
                    <p className="text-slate-500 font-medium custom-spacing pt-4">
                        Create a simple social profile with any language or framework you'd like to. This is the first ever challenge on Design Mentor and the starter challenge! Download the files and get started with your first design now!
                    </p>
                    <br/>
                    <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a onClick={handleRedirect}>Download Files</a></button>
                </div>
                <img src="/designs/design_1.png" className="rounded" width="500" />


            </div>
            <div className="pt-24">
                <Footer/>
            </div>
        </div>
    )
}