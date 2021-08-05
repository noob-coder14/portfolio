import React from 'react'

function Education() {
    return (
        <div className="bg-white pt-24 pb-12 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-24">Education:</div>

            <div className="grid grid-cols-5 gap-6 ml-8 mb-20">
                <div className="justify-self-center h-24 w-24"><img src="./kuet logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Khulna University of Engineering and Technology</div>
                    <div className="">BSc</div>
                    <div className="">Electronics and Communication Engineering</div>
                    <div className="">April, 2015 - April,2019</div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 ml-8 mb-20">
                <div className="justify-self-center h-24 w-24"><img src="./ndc logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">Notre Dame College</div>
                    <div className="">HSC - 2014</div>
                    <div className="">Group-V, Science</div>
                    <div className="">July, 2012 - July, 2014</div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 ml-8 mb-20">
                <div className="justify-self-center h-24 w-24"><img src="./drmc logo.png" alt="Kuet Logo"></img></div>
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
