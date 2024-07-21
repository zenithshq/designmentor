'use client'

import React from "react";
import { useState, useEffect } from 'react';

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
    // const [rotateX, setRotateX] = useState(4);
    // const [rotateY, setRotateY] = useState(-10);

    // const handleMouseMove = (e) => {
    //     const rect = e.currentTarget.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;
    //     const centerX = rect.width / 2;
    //     const centerY = rect.height / 2;
    //     setRotateX((y - centerY) / 10);
    //     setRotateY((centerX - x) / 10);
    // };

    // const handleMouseLeave = () => {
    //     setRotateX(4);
    //     setRotateY(-10);
    // };
    return (
        <div>
            <section id="hero">
                <div className="pb-12"></div>
                <motion.header className="navbar-header flex gap-10"
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}>
                    <a href="#home" className="hover:text-slate-300">Home</a>
                    <a href="/challenges" className="hover:text-slate-300">Challenges</a>
                    <a href="/team" className="hover:text-slate-300">Team</a>
                    <a href="/articles" className="hover:text-slate-300">Articles</a>
                </motion.header>
                <br/>
                <br/>
                    <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    viewport={{ once: true }}
                    className="pt-12">
                        <button className="geist text-center" id="dml">
                            <div className="flex px-8">
                                Follow Us On Twitter
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#F0F0F0" height="20" className="ml-4" width="20px" viewBox="0 0 321.666 321.666">
                                <path d="M320.518,70.438c-1.187-1.076-2.952-1.21-4.287-0.325c-5.903,3.916-13.86,5.904-20.473,6.914  c7.907-6.45,17.13-16.588,17.069-29.652c-0.006-1.314-0.748-2.515-1.921-3.108c-1.173-0.593-2.58-0.478-3.642,0.296  C295.279,53.309,278.1,57.903,271.81,59.37c-4.448-7.33-19.746-28.824-46.187-28.824c-1.479,0-2.988,0.07-4.485,0.207  c-32.859,3.022-48.781,22.237-56.351,37.825c-4.786,9.855-6.888,19.397-7.809,25.699c-5.211-4.542-14.3-11.454-27.829-18.371  C108.481,65.337,72.983,52.739,21.247,52.739c-5.03,0-10.197,0.119-15.358,0.354c-1.174,0.054-2.243,0.693-2.846,1.702  c-0.603,1.009-0.659,2.254-0.148,3.313C13.937,81.04,37.69,94.51,53.153,101.18c-8.484,2.248-17.549,6.634-20.388,13.544  c-1.441,3.508-1.811,9.021,4.608,15.364c9.424,9.312,20.503,14.97,30.265,18.405c-7.648,1.361-13.755,3.697-15.735,7.584  c-0.753,1.48-1.612,4.518,1.1,8.246c13.001,17.878,44.162,24.83,57.98,25.964c-1.753,4.165-5.404,10.928-12.455,17.626  c-15.066,14.309-38.822,21.873-68.7,21.874c-0.003,0-0.006,0-0.009,0c-8.119,0-16.833-0.55-25.903-1.636  c-1.498-0.177-2.944,0.622-3.585,1.99c-0.641,1.367-0.333,2.991,0.764,4.028C40.484,271.42,85.2,291.113,130.41,291.12  c0.009,0,0.015,0,0.023,0c49.772,0,98.504-24.472,130.357-65.463c28.367-36.505,39.233-80.199,30.06-120.383  c6.128-2.623,19.655-10.379,30.406-30.602C322.008,73.258,321.704,71.514,320.518,70.438z"/>
                                </svg>
                            </div>
                        </button>
                        <div className="pt-2 pb-2">
                            <h1 className="text-5xl pt-8 fnt-bold geist">Build & Discover Various UI Designs</h1>
                            <p className="text-xl pt-4 geist intro-para text-slate-300">Find and solve new design and user interface challenges that can help you to improve your overall frontend development skills. Our designs are easy, modern and minimalistic which are easier to make. We have challenges sorted by difficulties.</p>
                        </div>
                        <div>
                        </div>
                        <br/>
                        <button className="geist text-center btn-hecker">
                            <a href="/challenges" className="flex ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                            <p className="text-center">View Challenges</p>
                            </a>
                        </button>
                    </motion.div>
            </section>
        </div>
    )
}