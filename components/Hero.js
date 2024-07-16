'use client'

import React from "react";
import { useState, useEffect } from 'react';

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
    const [rotateX, setRotateX] = useState(4);
    const [rotateY, setRotateY] = useState(-10);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX((y - centerY) / 10);
        setRotateY((centerX - x) / 10);
    };

    const handleMouseLeave = () => {
        setRotateX(4);
        setRotateY(-10);
    };
    return (
        <motion.div className="bg-shapes"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}>
            <header className="text-gray-600 body-font pt-4 ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className="ml-3 text-xl font-bold underlined-2">Design Mentor</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
                    <a className="mr-5 text-gray-600 font-medium custom-spacing text-lg underline-animate hover:text-gray-500 " href="#home">Home</a>
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
                
            <section className="text-gray-600 body-font pt-16">
                <div className="flexbox-custom m-4">
                    <div className="pt-12 pt-to-remove"><h1 className="text-3xl font-bold text-gray-900">Improve Your Frontend Skills <br/> With <span className="underlined">Design Mentor</span></h1>
                    <p className="pt-5 text-gray-600 custom-spacing font-medium text-lg">Welcome to this amazing platform developed for beginners to improve their frontend skills. We have many interesting challenges for you to complete and learn to build new projects.</p>
                    </div>
                    <div
                        className="op md:w-1/2 w-full"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            perspective: '1000px'
                        }}
                        >
                        <div
                            className={`h-full bg-gray-100 p-8 rounded testimonial`}
                            style={{
                            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                            }}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="block w-5 h-5 text-gray-400 mb-4"
                            viewBox="0 0 975.036 975.036"
                            >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed custom-spacing font-medium mb-6">
                            I have mastered frontend skills using Design Mentor. I really appreciate their UI design team for designing these goods design that helped me master frontend.
                            </p>
                            <a className="inline-flex items-center">
                            <img
                                alt="testimonial"
                                src="https://avatars.githubusercontent.com/u/157343700?v=4"
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-gray-900">Ronit Raj</span>
                                <span className="text-gray-500 text-sm">Fullstack Developer</span>
                            </span>
                            </a>
                        </div>
                        </div>
                </div>
            </section>

            <div className="pt-16 pb-16">
                <hr/>
            </div>
        </motion.div>
    )
}