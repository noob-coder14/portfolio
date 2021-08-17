import React from 'react'
import Slider from './Slider'

function Projects() {
    return (
        <div className="bg-white pt-24 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-10 font-Itim">My Projects</div>
            
            <div className="flex gap-x-32">
                <Slider/>
                <div className="pt-6">
                    <div className="font-Itim text-4xl pb-6 font-semibold">Drumbo</div>
                    <div className="font-archD pb-6">
                        Basic Drum Application. Different Bass and Pedals added. A very friendly frontend view with a simple glitch with clicking. Can be controlled by mouse and keypads as well.
                    </div>
                    <div className="flex flex-row justify-start gap-x-3 md:gap-x-6 lg:gap-x-8 mx-2 md:mx-0 pb-4">
                        <div className="bg-gray-50 w-10 h-10 rounded-full hover:shadow-lg cursor-pointer flex justify-center"><a href="https://drumbo-zipped36.netlify.app/" className="place-self-center p-2.5"><i class="fas fa-globe fa-2x"></i></a></div>
                        <div className="bg-gray-50 w-10 h-10 rounded-full hover:shadow-lg cursor-pointer flex justify-center"><a href="https://github.com/zipped36/DrumKits" className="place-self-center p-2.5"><i className="fab fa-github fa-2x"/></a></div>
                    </div>
                    <div className="flex gap-x-3">
                        <div className="px-3 py-0.5 rounded-lg bg-green-800 text-white cursor-pointer">HTML</div>
                        <div className="px-3 py-0.5 rounded-lg bg-green-800 text-white cursor-pointer">CSS</div>
                        <div className="px-3 py-0.5 rounded-lg bg-green-800 text-white cursor-pointer">Vanilla-JS</div>
                    </div>
                </div>
            </div>    
        </div>  
    )
}

export default Projects
