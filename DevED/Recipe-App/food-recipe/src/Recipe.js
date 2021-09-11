import React from 'react';
import style from './recipe.module.css'

const Recipe=({title,image,calories,ingredients})=>{
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <h3 className={style.calories}>Calories:{calories}</h3>
            <h4>
                <ul>
                    {ingredients.map((ingredient)=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </h4>
            <img className={style.image}src={image} alt="" />

        </div>
    );
}

export default Recipe;