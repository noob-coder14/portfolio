import React from 'react'

function Footer() {
    return (
        <div className="bg-green-50 pt-10 pb-10 w-full">
            <div className="w-8/12 mx-auto flex flex-initial flex-wrap gap-x-32 pb-12">
                <div className="flex-col flex gap-y-2 font-semibold pb-6">
                    <div className="font-bold text-xl pb-3">My Links</div>
                    <div className="">Home</div>
                    <div className="">My Skills</div>
                    <div className="">Projects</div>
                </div> 
                <div className="flex-col flex gap-y-2 pb-6">
                    <div className="font-bold text-xl pb-3">My Contacts</div>
                    <div className="flex gap-x-2">
                        <div className=""><i class="fas fa-envelope-open-text fa-lg"></i></div>
                        <div className="font-semibold self-auto	">helloworld@shuhat.dev</div>
                    </div>
                    <div className="flex gap-x-2">
                        <div className=""><i class="fas fa-phone-volume fa-lg"></i></div>
                        <div className="font-semibold self-auto	">+8801766813937</div>
                    </div>
                </div>
                
                <div className="pb-6">
                    <div className="font-bold text-xl pb-4">My Connections</div>
                    <div className="flex flex-row gap-x-4">
                        <div className="bg-gray-50 p-4 h-16 w-16 rounded-full hover:shadow-lg cursor-pointer"><i class="fab fa-facebook-f fa-2x"></i></div>
                        <div className="bg-gray-50 p-4 h-16 w-16 rounded-full hover:shadow-lg cursor-pointer"><i class="fab fa-linkedin-in fa-2x"></i></div>
                        <div className="bg-gray-50 p-4 h-16 w-16 rounded-full hover:shadow-lg cursor-pointer"><i class="far fa-envelope fa-2x"></i></div>
                        <div className="bg-gray-50 p-4 h-16 w-16 rounded-full hover:shadow-lg cursor-pointer"><i class="fab fa-github fa-2x"></i></div>
                        <div className="bg-gray-50 p-4 h-16 w-16 rounded-full hover:shadow-lg cursor-pointer"><i class="fab fa-dev fa-2x"></i></div>
                    </div>
                </div>
            </div>
            
            <div className="text-center pb-0"><i class="far fa-copyright"></i>Copyright 2021 Kh Shuhat Uddin</div>
        </div>
    )
}

export default Footer