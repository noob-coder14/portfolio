import React from 'react'

function Skills() {
    return (
        <div className="bg-white pt-24 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-10">My Skills</div>
            <div className="text-2xl font-bold text-green-800 mb-10 pl-28">Frontend Technologies:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/html-5.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">HTML</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Expert</div>
                    </div>   

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/css-3.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">CSS</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Expert</div>
                    </div>

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <div className="h-12 w-12 m-auto text-blue-400"><i class="fab fa-bootstrap fa-3x"></i></div>
                        <div className="text-green-700 font-bold text-xl pb-1.5">Bootstrap</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Intermediate</div>
                    </div>

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/react.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">ReactJS</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Intermediate</div>
                    </div>

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/tailwind.svg" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">Tailwind</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Expert</div>
                    </div> 
            </div>

                <div className="text-2xl font-bold text-green-800 mb-10 pl-28">Backend Technologies:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/node.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">NodeJS</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Introductory</div>
                    </div>   

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/expressjs-icon.svg" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">ExpressJS</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Introductory</div>
                    </div>

                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                    <img src="./skill icons/sockets.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">Web Sockets</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Introductory</div>
                    </div>
                </div> 

                <div className="text-2xl font-bold text-green-800 mb-10 pl-28">Database:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/mongo.svg" className="h-12 w-20 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">MongoDB</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Introductory</div>
                    </div>   
                </div>

                <div className="text-2xl font-bold text-green-800 mb-10 pl-28">APIs:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/rest.png" className="h-12 w-20 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">REST API</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Introductory</div>
                    </div>   
                </div>  

                <div className="text-2xl font-bold text-green-800 mb-10 pl-28">Testing Tools:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/postman.svg" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">Postman</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Intermediate</div>
                    </div>   
                </div>

                <div className="text-2xl font-bold text-green-800 mb-10 pl-28">Designing Tools:</div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                    <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center">
                        <img src="./skill icons/xd.png" className="h-12 w-12 m-auto"/>
                        <div className="text-green-700 font-bold text-xl pb-1.5">Adobe XD</div>
                        <div className="rounded-md text-base font-bold bg-green-700 text-white">Intermediate</div>
                    </div>   
                </div>  

        </div>
    )
}

export default Skills
