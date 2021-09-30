import React from 'react'
import "./Profile.css"
function Profile({name,age,country,skills,image}) {
    return (
        <div className="profile">
            <div className="image">
            {<img src={image} alt=""/>}
            </div>
            
            <h4 >{name}</h4>
            <p>Age: {age}</p>
            <p>Country: {country} </p>
            <p>Skils:</p>
            {skills.map((item) =>(
                <ul>
                <li>{item}</li>
                </ul>
                
            ))}   
        </div>
    )
}

export default Profile
