import React,{useEffect,useState} from 'react'
import MySkills from '../Pages/MySkillsData.json'


function Skills() {
    
    return (
        <div className="bg-white pt-24 pl-10 container mx-auto">
            <div className="text-4xl font-bold text-green-800 mb-20 pl-10 font-Itim">My Skills</div>
            <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">Frontend Technologies:</div>
            <div className="h-0.5 w-full ml-20 bg-green-50 mb-8 "></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="FrontEnd Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}
            </div>

                <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">Backend Technologies:</div>
                <div className="h-0.5 w-full ml-20 bg-green-50 mb-8 "></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="BackEnd Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}
                </div> 

                <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">Database:</div>
                <div className="h-0.5 w-full ml-20 bg-green-50 mb-8"></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="DB Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}  
                </div>

                <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">APIs:</div>
                <div className="h-0.5 w-full ml-20 bg-green-50 mb-8"></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="API Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}  
                </div>  

                <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">Testing Tools:</div>
                <div className="h-0.5 w-full ml-20 bg-green-50 mb-8"></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="Testing Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}  
                </div>

                <div className="text-2xl font-bold text-green-800 mb-2 pl-28 font-Itim">Designing Tools:</div>
                <div className="h-0.5 w-full ml-20 bg-green-50 mb-8"></div>
                <div className="mx-auto w-11/12 flex pl-28 gap-x-12 gap-y-8 flex-wrap pb-16">
                {
                    MySkills.map((Myskill)=>{
                        if(Myskill.Section==="Design Technologies"){
                            return(
                                <div className="bg-green-50 p-5 pl-12 pr-12 rounded-lg w-60 text-center font-archD" key={Myskill.id}>
                                    <img src={Myskill.Img} className="h-12 w-12 m-auto"/>
                                    <div className="text-green-700 font-bold text-xl pb-1.5">{Myskill.Name}</div>
                                    <div className="rounded-md text-base font-bold bg-green-700 text-white">{Myskill.Expertise_Level}</div>
                                </div>
                            )
                        }
                })}  
                </div>  

        </div>
    )
}

export default Skills
