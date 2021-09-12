import React,{useState,createContext}from 'react';

export const MovieContext=createContext();//initiate context



export const MovieProvider=(props)=>{
    const [movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:23124
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:2566124
        },
        {
            name:'Inception',
            price:'$10',
            id:23524
        }
    ]);
    return(
        //<Nav/> <MovieList/>==={props.children}
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

