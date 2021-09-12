import React from 'react';

const Movie=({name,price})=>{
    return(
        <div>
            <h3>Movie: {name}</h3>
            <h3>Price: {price}</h3>
        </div>

    );
}
export default Movie;