import React from 'react'

function OrgExperience() {
    return (
        <div className="bg-white pt-20 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-24 font-Itim">Organizations</div>

            <div className="grid grid-cols-5 gap-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-24 w-24"><img src="./we_the_olympians logo.jpg" alt="Kuet Logo" className="rounded-full"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">We the Olympians</div>
                    <div className="">Founder </div>
                    <div className="w-8/12">This was a project maintained and by BRAC community. More than thousands of school students are a part of this program. We had run multiple workshops at the rural schools to prepare and motivate students for national and international olympiads.</div>                 
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-24 w-24"><img src="./MEC logo.png" alt="Kuet Logo"></img></div>
                <div className="col-span-4 self-center">
                    <div className="text-xl font-bold text-green">MEC Club</div>
                    <div className="">Vice President</div>
                    <div className="w-8/12">This club is providing the mentorship regarding many software projects and different tech-domains. This is a club that is run for the students and by the students. Country's biggest tech event named Technival-2018 is organised by this club. </div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-green-200"></div>
        </div>
    )
}

export default OrgExperience
