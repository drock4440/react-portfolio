import React from 'react';

const About = () => {
    return (
        <div className="about-container">
        <h5>About Me</h5>

        {/* <img src={Profile} alt="profile-photo" className="profile float-left"></img> */}
        <div>

            <div className="mt-3">

                <p>I am a full stack developer looking for work in the tech industry.</p>
                <p>Full-stack web developer with a fresh mindset. Adept at debugging code to create functional 
                                front-end web pages. Proficient in JavaScript, CSS, HTML, Node, jQuery, mySql, Git, and operating 
                                the command line. Looking to combine my attention to detail with my ability to develop and create to 
                                improve online customer interaction.</p>

                <p>
                    I am interested in learning about new opportunities and can
                    be reached
                    through this portfolio, by
                    email:
                                            <a href="mailto:daltonrothrock8@gmail.com"
                        target="_blank">daltonrothrock8@gmail.com, </a> through<a
                            href="https://github.com/drock4440"> GitHub</a>, or through <a
                                href="https://www.linkedin.com/in/dalton-rothrock-a67935162">
                        LinkedIn.</a>
                    

                                            </p>
            </div>

            <div className="card-body contactLinks">
                <a href="https://www.linkedin.com/in/dalton-rothrock-a67935162" className="card-link">LinkedIn</a>
                <a href="https://github.com/drock4440" className="card-link">GitHub</a>
            </div>
        </div>
        {/* end copy paste  */}
    </div>

    ) 
}

export default About