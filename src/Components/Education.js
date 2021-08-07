import React from 'react'

function Education() {
    return (
        <div className="bg-white pt-20 pb-12 pl-10 container mx-auto">
            <div className="text-3xl md:4xl font-bold text-green-800 mb-16 lg:mb-20 md:pl-24 pl-6 font-Itim">Education:</div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-28 w-28 md:h-24 md:w-24 mb-8"><img src="./kuet logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Khulna University of Engineering and Technology</div>
                    <div className="">BSc</div>
                    <div className="">Electronics and Communication Engineering</div>
                    <div className="">April, 2015 - April,2019</div>
                </div>
            </div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-32 w-32 md:h-24 md:w-24 mb-8"><img src="./ndc logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Notre Dame College</div>
                    <div className="">HSC - 2014</div>
                    <div className="">Group-V, Science</div>
                    <div className="">July, 2012 - July, 2014</div>
                </div>
            </div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-32 w-32 md:h-24 md:w-24 mb-8"><img src="./drmc logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Dhaka Residential Model College</div>
                    <div className="">SSC - 2012</div>
                    <div className="">Science</div>
                    <div className="">Jan, 2010 - February, 2012</div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-green-200"></div>
        </div>
    )
}

export default Education;
