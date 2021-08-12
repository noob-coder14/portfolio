import React from 'react'

function LandingSkills() {
    return (
        <div className="h-screen bg-green-50 relative md:pt-48 p-36 overflow-hidden">
            <div className="container mx-auto text-center">
                {/* <div className="text-5xl"></div> */}
                <div className="text-4xl font-semibold mt-3 font-Amatic">I'm flattered that you are exploring</div>
                <div className="text-5xl font-semibold mt-6 font-Acme">'My Skills'</div>
                <img src="skillsimg.png" className="h-60 md:h-80 lg:h-96 mx-auto mt-12"></img>
                {/* <div className="text-xl	mt-3">I'm a <span className="font-bold">Software Developer</span></div> */}
                {/* <button className="mt-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download My CV</span>
                </button> */}
                <div className="mt-5 mb-4 flex flex-row justify-center gap-x-12 relative">
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://github.com/zipped36"><i className="fab fa-github fa-2x mx-auto"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://stackoverflow.com/users/14694891/shuhat36"><i className="fab fa-stack-overflow fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://www.linkedin.com/in/khshuhatuddin/"><i className="fab fa-linkedin-in fa-2x"/></a></div>
                    <div className="bg-white h-14 w-14 p-2.5 rounded-full hover:shadow-xl cursor-pointer"><a href="https://dev.to/"><i className="fab fa-dev fa-2x"/></a></div>
                </div>

                {/* <div className="flex mt-24 mb-24 justify-center gap-x-6">
                    <div className="text-xl font-bold self-center">scroll down please</div>
                    <span style={{color: "#059669"}}><i class="fas fa-arrow-circle-down fa-7x"></i></span>
                </div> */}
                {/* <div className="flex flex-row-reverse">
                    <img src="color pencil.png" className="w-1/6"></img>
                </div> */}
            </div>
        </div>
    )
}

export default LandingSkills
