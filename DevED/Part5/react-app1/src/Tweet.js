import React from 'react';
import './App.css';


const Tweet=({name,message,likes})=>{//deconstructure 
    return (
        <div className="tweet">
            <h3>Name:{name}</h3>
            <p>{message}</p>
            <h3>Number of Likes:{likes}</h3>

        </div>
    );
}
export default Tweet; 