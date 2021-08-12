import React from 'react'
import Navbar from "./Navbar";

function Landing() {
    return (
        <div className="h-screen bg-green-50 md:pt-48 p-36 z-200 relative overflow-hidden">
            <div className="container mx-auto text-center">
                <div className="text-3xl font-Acme md:text-4xl lg:text-5xl"> Hello! Welcome to my site!</div>
                <div className="mx-auto mt-8 mb-4">
                    <img src="ppic.png" className="h-64 md:h-80 lg:h-96 mx-auto mt-12"></img>
                </div>
                {/* <div className="text-6xl font-semibold mt-3">Shuhat</div>
                <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div> */}
                <button className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span><form method="get" action="Kh Shuhat Uddin.pdf">
                        <button type="submit">Download My CV</button>
                    </form></span>
                </button>
                <div className="mt-12 mb-24 flex flex-row justify-center gap-x-12 relative flex-shrink-0	">
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer flex justify-center"><a href="https://github.com/zipped36" className="place-self-center p-2.5"><i className="fab fa-github fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer flex justify-center"><a href="https://stackoverflow.com/users/14694891/shuhat36" className="place-self-center p-2.5"><i className="fab fa-stack-overflow fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer flex justify-center"><a href="https://www.linkedin.com/in/khshuhatuddin/" className="place-self-center p-2.5"><i className="fab fa-linkedin-in fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer flex justify-center"><a href="https://dev.to/" className="place-self-center p-2.5"><i className="fab fa-dev fa-2x"/></a></div>
                </div>
                {/* <div className="bg-repeat-x h-24 w-24" style={{src:"https://img.freepik.com/free-vector/writting-pencil-design_1095-187.jpg?size=338&ext=jpg"}}></div> */}
                {/* <div className="absolute lg:-bottom-24 md:-bottom-18 -bottom-12 right-12 md:right-18 lg:right-24 z-0 w-1/2 mx-auto mt-12">
                    <img src="color pencil.png" className="w-32 md:w-48 lg:w-64 bg-repeat-x"></img>
                </div> */}
            </div>
        </div>
    )
}

export default Landing;
