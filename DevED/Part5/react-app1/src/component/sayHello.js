import React from 'react';

const Hello=()=>{
    const sayHello=()=>{
        console.log('Hello');
    };
    return(
        <div>
            <h3>This is Hello component</h3>
            <button onClick={sayHello}>Say hello!</button>
        </div>

    )
}

export default Hello;