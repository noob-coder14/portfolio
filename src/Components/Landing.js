import React from 'react'
import Navbar from "./Navbar";

function Landing() {
    return (
        <div className="h-screen bg-green-50 relative">
            <Navbar/>
            <div className="container mx-auto text-center pt-72">
                <div className="text-5xl"> Hello! This is</div>
                <div className="text-9xl font-semibold mt-3">Shuhat</div>
                <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div>
                <button class="mt-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download My CV</span>
                </button>
                <div className="mt-16 flex flex-row justify-center gap-x-12">
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i class="fab fa-github fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i class="fab fa-linkedin-in fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i class="fab fa-stack-overflow fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i class="fab fa-dev fa-2x"/></div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
