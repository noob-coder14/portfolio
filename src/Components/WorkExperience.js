import React from 'react'

function WorkExperience() {
    return (
        <div className="bg-white mt-8 pt-24 pb-12 pl-10 container mx-auto">
            <div className="text-3xl md:4xl font-bold text-green-800 mb-16 lg:mb-20 md:pl-24 pl-6 font-Itim">Working Experience</div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-32 w-32 md:h-24 md:w-24"><img src="./brainekt.png" alt="Brainekt Logo"></img></div>
                <div className="md:col-span-4 col-span-11 col-span-5 self-center">
                    <div className="text-xl font-bold text-green">Brainekt</div>
                    <div className="">Software Developer</div>
                    <div className="">July, 2019 - Present</div>
                    <div className="w-10/12 md:w-8/12">An AI based startup operating in Bangladesh and Australia. I am developing different reusable react components for different project. I have experience in working on some medium to large scale applications. </div>                 
                </div>
            </div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-32 w-32 md:h-24 md:w-24"><img src="./brac.png" alt="brac Logo"></img></div>
                <div className="md:col-span-4 col-span-11 col-span-5 self-center">
                    <div className="text-xl font-bold text-green">BRAC</div>
                    <div className="">ANN Intern</div>
                    <div className="">November, 2018 - March, 2019</div>
                    <div className="w-10/12 md:w-8/12">ANN Program is one of the most elite program for undergraduate students, organized by BRAC community to prepare the students as a true executives.</div>
                </div>
            </div>

            <div className="flex-col md:grid md:grid-cols-5 md:gap-6 gap-y-6 ml-8 mb-20 font-archD">
                <div className="justify-self-center h-32 w-32 md:h-24 md:w-24"><img src="./msoft.png" alt="Microsoft Logo"></img></div>
                <div className="md:col-span-4 col-span-11 col-span-5 self-center">
                    <div className="text-xl font-bold text-green">Microsoft Young Bangla</div>
                    <div className="">Entrepreneurship Intern</div>
                    <div className="w-10/12 md:w-8/12">This was a Three-day long event for young minds to nurture leadership quality and to set up the learning curves to be an Entrepreneur. </div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-green-200"></div>
        </div>
    )
}

export default WorkExperience
