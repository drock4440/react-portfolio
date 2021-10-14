import React from 'react';
import ResumePNG from '../assets/resume.png'
function Resume () {
    
return (


    <div className="contact-card">

    <div className="card">
      <h1 className="text-center">Resume</h1>
      <div className="card-content mx-auto">
      <div><img src={ResumePNG} alt="profile-photo" className="profile float-left"></img></div>
        <div className="links">
        <a href="https://drive.google.com/file/d/1Ess1d6QU8ZVyn6Bm6pReRyD7VY8YFNup/view?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a> 
        </div>
      </div>
    </div>
  </div >
);
}


export default Resume