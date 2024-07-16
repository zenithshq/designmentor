import React from "react";
import Image from "next/image";

import Link from "next/link";
import '/app/app.css'

export default function Page () {
    return (
        <div>
            <header className="text-gray-600 body-font pt-4 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-xl font-bold">Design Mentor</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg hover:text-gray-500 " href="/">Home</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg hover:text-gray-500 " href="/challenges">Challenges</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg hover:text-gray-500 " href="/team">Team</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg hover:text-gray-500 " href="/articles">Articles</a>
                    </nav>
                </div>
            </header>

            <h1 className="text-center pt-12 text-4xl font-bold">Soon...</h1>
        </div>
    )
}