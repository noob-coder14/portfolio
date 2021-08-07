import React from 'react'

function Recognition() {
    return (
        <div className="bg-white pt-20 pb-12 pl-10 container mx-auto">
            <div className="text-3xl md:4xl font-bold text-green-800 mb-16 lg:mb-20 md:pl-24 pl-6 font-Itim">Recognitions</div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-24 w-24 mb-2"><img src="./i.png" alt="Channel I Logo" className="rounded-full"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Angkur Channel I</div>
                    <div className="">Champion, Creative Dialog Writing </div>
                    <div className="w-10/12 md:w-8/12">A competetion organized by MIST Cultural Club and sponsored by Channel I, named Angkur. Over 800 students participated the program and I was selected as the champion of the creative dialog writing section.</div>                 
                </div>
            </div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-24 w-24 mb-2"><img src="./emk.png" alt="EMK Logo" className="rounded-full"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">EMK Center</div>
                    <div className="">Edu-Startup Competetion - 2018</div>
                    <div className="">Finalist</div>
                    <div className="w-10/12 md:w-8/12">A edu-startup competetion organized by EMK center. I participated as a team lead of "We the Olympiads" and selected for the final pitch round</div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-green-200"></div>
        </div>
    )
}

export default Recognition
