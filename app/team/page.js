import React from "react";
import Image from "next/image";

import Link from "next/link";
import '/app/app.css'

export default function Page () {
    return (
        <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14">
            <header className="text-gray-600 body-font pt-4 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className="ml-3 text-xl font-bold underlined-2">Design Mentor</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/">Home</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/challenges">Challenges</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/team">Team</a>
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="/articles">Articles</a>
                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button> */}
                </div>
            </header>

            <h1 className="text-center text-3xl pt-12 font-bold text-black">Our Team</h1>
            <p className="text-center text-lg pt-2 font-medium text-slate-600 custom-spacing">Currently design mentor has 1 team member</p>

            <div className="card md:flex shadow-2xl mx-auto hover:shadow-xl bg-gray-100">
                <img class="h-auto rounded" src="/avatar.jpg" alt="avatar" width="175"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <p class="text-md font-medium custom-spacing text-slate-600">
                        Lead Developer <b>@designmentor</b>
                    </p>
                    <figcaption class="font-medium">
                    <div class="text-sky-600 font-medium">
                        Aryan Tripathi
                    </div>
                    <div class="text-slate-500 font-medium custom-spacing">
                        Software Engineer
                    </div>
                    </figcaption>
                    <div className="flex gap-4 socials pt-1">
                    <a href="https://github.com/aryannn053" className="wahatag">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon s-ion-icon"
                        viewBox="0 0 512 512"
                    >
                        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                    </svg>
                    </a>
                    <a href="https://linkedin.com/in/badri-vishal" className="wahatag">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon s-ion-icon"
                        viewBox="0 0 512 512"
                    >
                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                    </svg>
                    </a>
                    <a href="https://x.com/aryantri13" className="wahatag">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon s-ion-icon"
                        viewBox="0 0 512 512"
                    >
                        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </svg>
                    </a>
                </div>
                </div>
                <br/>
            </div>
            <br/>
        </div>
    )
}