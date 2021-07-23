import React from 'react'
import Education from '../Components/Education';
import Landing from '../Components/Landing';
import OrgExperience from '../Components/OrgExperience';
import Recognition from '../Components/Recognition';
import WorkExperience from '../Components/WorkExperience';

function Home() {
    return (
        <div>  
            <Landing/>
            <WorkExperience/>
            <Education/>
            <OrgExperience/>
            <Recognition/> 
        </div>
    )
}

export default Home
