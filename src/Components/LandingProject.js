import React from 'react'

function LandingProject() {
    return (
        <div className="h-screen bg-green-50 relative pt-64 z-0">
            <div className="container mx-auto text-center">
                <div className="text-3xl font-semibold mt-3">Can't thank you enough for visiting</div>
                <div className="text-5xl font-semibold mt-6">'My Projects'</div>
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

export default LandingProject
