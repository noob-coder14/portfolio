import React from 'react'
import Navbar from "./Navbar";

function Landing() {
    return (
        <div className="h-screen bg-green-50 relative pt-64 z-0">
            <div className="container mx-auto text-center">
                <div className="text-5xl"> Hello! This is</div>
                <div className="text-9xl font-semibold mt-3">Shuhat</div>
                <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div>
                <button className="mt-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span><form method="get" action="Kh Shuhat Uddin.pdf">
                        <button type="submit">Download My CV</button>
                    </form></span>
                </button>
                <div className="mt-16 flex flex-row justify-center gap-x-12">
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><a href="https://github.com/zipped36"><i className="fab fa-github fa-2x"/></a></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><a href="https://stackoverflow.com/users/14694891/shuhat36"><i className="fab fa-stack-overflow fa-2x"/></a></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><a href="https://www.linkedin.com/in/khshuhatuddin/"><i className="fab fa-linkedin-in fa-2x"/></a></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><a href="https://dev.to/"><i className="fab fa-dev fa-2x"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
