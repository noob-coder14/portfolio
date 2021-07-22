import React from 'react'

function Navbar() {
    return (
        
        <div className="bg-green-50 top-0 fixed w-screen">
            <div className="container text-green-800 mx-auto flex justify-between font-mono text-gray-900 pt-4 pb-5">
                <div className="h-12 w-12 cursor-pointer"><img className="object-contain" src="./boy.png" alt="logo"/></div>
                {/* <div className="text-3xl font-bold cursor-pointer">Kh_Shuhat</div> */}
                <ul className="text-lg font-semibold self-end">
                    <li className="inline ml-5 p-2 cursor-pointer hover:bg-green-100 rounded-lg">Home</li>
                    <li className="inline ml-5 p-2 cursor-pointer hover:bg-green-100 rounded-lg">My Skills</li>
                    <li className="inline ml-5 p-2 cursor-pointer hover:bg-green-100 rounded-lg">Projects</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
