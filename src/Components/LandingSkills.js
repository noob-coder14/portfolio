import React from 'react'

function LandingSkills() {
    return (
        <div className="h-screen bg-green-50 relative pt-64 z-0">
            <div className="container mx-auto text-center">
                {/* <div className="text-5xl"></div> */}
                <div className="text-3xl font-semibold mt-3">I'm flattered that you are exploring</div>
                <div className="text-5xl font-semibold mt-6">'My Skills'</div>
                {/* <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div> */}
                {/* <button className="mt-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download My CV</span>
                </button> */}
                <div className="mt-16 self-start flex flex-row justify-center gap-x-10">
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i className="fab fa-github fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i className="fab fa-linkedin-in fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i className="fab fa-stack-overflow fa-2x"/></div>
                    <div className="bg-white p-4 h-16 w-16 rounded-full hover:shadow-xl cursor-pointer"><i className="fab fa-dev fa-2x"/></div>
                </div>

                <div className="flex mt-24 justify-center gap-x-6">
                    <div className="text-xl font-bold self-center">scroll down please</div>
                    <span style={{color: "#059669"}}><i class="fas fa-arrow-circle-down fa-7x"></i></span>
                </div>
            </div>
        </div>
    )
}

export default LandingSkills
