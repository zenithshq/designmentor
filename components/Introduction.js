import React from "react";
import Image from "next/image";

import Link from "next/link";

export const Introduction = () => {
    return (
        <div>    
            <section className="text-gray-600 body-font pt-2">
                <div className="flexbox-custom">
                    <div>
                        <img src="https://i.imgur.com/beKpHrN.png" className="rounded" width="450"/>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Convert UI Designs Into Your <br/> Frontend Web Pages</h1>
                        <p className="custom-spacing pt-4 font-medium text-lg">Master your frontend skills using our UI Designs. We <br/> provide you images and style guide so that you can <br/> make designs easily without any issues </p>

                        <br/>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold text-md rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "><a href="/challenges">Challenges</a></button>
                    </div>
                </div>                
            </section>

            <div className="pt-12 pb-16">
                <hr/>
            </div>

            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col text-lg">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    
                    <span class="ml-3 text-xl font-bold">Design Mentor</span>
                    </a>
                    <p class="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 — Design Mentor
                    <a href="https://twitter.com/knyttneve" class="text-gray-600 font-bold ml-1" rel="noopener noreferrer" target="_blank">                  @aryantri13</a>
                    </p>
                </div>
                </footer>
        </div>
    )
}