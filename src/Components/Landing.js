import React from 'react'
import Navbar from "./Navbar";

function Landing() {
    return (
        <div className="h-screen bg-green-50 pt-48 z-200 overflow-hidden">
            <div className="container mx-auto text-center">
                <div className="text-5xl font-Acme"> Hello! Welcome to my site!</div>
                <div className="mx-auto mt-8 mb-4">
                    <img src="ppic.png" className="z-0 h-100 w-80 mt-4 mx-auto"></img>
                </div>
                {/* <div className="text-6xl font-semibold mt-3">Shuhat</div>
                <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div> */}
                <button className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span><form method="get" action="Kh Shuhat Uddin.pdf">
                        <button type="submit">Download My CV</button>
                    </form></span>
                </button>
                <div className="mt-10 mb-4 flex flex-row justify-center gap-x-12 relative">
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://github.com/zipped36"><i className="fab fa-github fa-2x mx-auto"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://stackoverflow.com/users/14694891/shuhat36"><i className="fab fa-stack-overflow fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://www.linkedin.com/in/khshuhatuddin/"><i className="fab fa-linkedin-in fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://dev.to/"><i className="fab fa-dev fa-2x"/></a></div>
                </div>
                <div className="flex flex-row-reverse">
                    <img src="color pencil.png" className="w-1/6"></img>
                </div>
            </div>
        </div>
    )
}

export default Landing;
