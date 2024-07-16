'use client'


import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

export const Introduction = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
        > 

            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col text-lg">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    
                    <span class="ml-3 text-xl font-bold text-gray-900">Design Mentor</span>
                    </a>
                    <p class="text-lg text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024
                    <a href="https://twitter.com/aryantri13" class="text-gray-900 font-bold ml-1 px-6" rel="noopener noreferrer" target="_blank">@aryantri13</a>
                    </p>
                </div>
                </footer>
        </motion.div>
    )
}