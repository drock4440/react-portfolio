import React from "react";
import HomeProfile from "../assets/HomeProfile.jpg"

function HomeCard() {
    return (


        <div className="row row-home">
            <div className="col-12">

                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomeProfile} alt="home-profile-photo" className="ome-profile-photo mb-3"></img>
                        <h5 className="card-title text-center">Full Stack Web developer</h5>
                        <p className="card-text text-center">Offering hard work and dedication to my craft and company</p>
                        <a href="https://www.linkedin.com/in/dalton-rothrock-a67935162/" className="ml-5">LinkedIn</a>
                        <a href="https://github.com/drock4440" className="ml-5">Github</a>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default HomeCard;
