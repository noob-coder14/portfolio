import React from 'react'

function ReachMe() {
    return (
        <div className="pt-24 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-10">Reach Me</div>
            
            <div className="">
                <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/2 p-8">
                        <img className="object-contain ml-6 mb-12 h-44 w-44 self-center cursor-pointer" src="./boy.png" alt="logo"/>
                        <p className="ml-6 text-green-700 text-3xl tracking-loose text-center">
                            I'm Open for suitable jobs and freelance projects
                        </p>
                        <p className="ml-6 text-3xl text-center md:text-4xl my-4 leading-relaxed md:leading-snug">
                            Leave me a message here!
                        </p>
                        {/* <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                            Please provide your valuable feedback and something something ...
                        </p> */}
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2 justify-center">
                        <div className="container w-full">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-8/12 px-2">
                                    <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                        <div className="flex-auto p-8">
                                            <h4 className="text-2xl mb-4 text-black font-semibold">
                                                Have any Enquiries?
                                            </h4>
                                            <form id="feedbackForm" action method>
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                                                        placeholder=" "
                                                        style={{ transition: "all 0.15s ease 0s" }}
                                                        required/>
                                                </div>
                                                <div className="w-full mb-3">
                                                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        maxLength={300}
                                                        name="feedback"
                                                        id="feedback"
                                                        rows={4}
                                                        cols={80}
                                                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                        placeholder
                                                        required
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="text-center mt-6">
                                                <button
                                                    id="feedbackBtn"
                                                    className="bg-green-200 text-black text-center mx-auto active:bg-green-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    type="submit"
                                                    style={{ transition: "all 0.15s ease 0s" }}
                                                >
                                                    Submit
                                                </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>  


       
    )
}

export default ReachMe
