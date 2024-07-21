'use client'

import React from "react";
import Image from "next/image";

import Link from "next/link";
import '/app/app.css'
import path from 'path';

import { motion } from "framer-motion";


export default function Page () {
      
    return (
        <main style={{
            height: `100vh`,
        }}>
        <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14">
            <div className="pt-12"></div>
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

            <div className="grid grid-cols-3 gap-16 p-8 pt-16">
                <div className="shadow-2xl border-gray-400 rounded">
                    <img src="/designs/design_1.png" />
                    <br/>

                    <div className="pt-1 px-6">
                        <h1 className="text-2xl font-bold">Social Profile</h1>
                        <div className="flex gap-4 pt-2">
                            <h2 className="font-bold text-sky-500">HTML</h2>
                            <h2 className="font-bold text-red-400">CSS</h2>
                        </div>

                        <p className="text-slate-400 font-medium pt-4">
                            A social profile with simple HTML and CSS. This challenge is helpful for learning flexbox and grid.
                        </p>

                        <br/>

                        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a href="/challenges/social-profile">Get Started</a></button>

                        <br/>
                        <br/>
                    </div>
                </div>
            </div>

        </div>
        </main>
    )
}