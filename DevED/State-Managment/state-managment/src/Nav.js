import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';
import style from './Nav.module.css';

const Nav=()=>{
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div className={style.nav}>
            <h3>Abylai's list of movies</h3>
            <h3>Number of movies: {movies.length} </h3>
        </div>
    );
}

export default Nav;