'use client'

import React from "react";
import Image from "next/image";

import Link from "next/link";
import '/app/app.css'
import { motion } from "framer-motion";

export default function Page () {
    return (
        <main style={{
            height: `100vh`
        }}>

        <div className="mx-auto md:max-w-lg lg:max-w-7xl px-14">
                <br/>
                <br/>
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

                <h1 className="text-2xl text-center pt-12">Soon</h1>
        </div>
        </main>
    )
}