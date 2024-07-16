import React from "react";
import Image from "next/image";

import Link from "next/link";
import '/app/app.css'
import path from 'path';
import { promises as fs } from 'fs';


export default function Page () {
      
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

                        <p className="text-slate-500 font-medium custom-spacing pt-4">
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
    )
}