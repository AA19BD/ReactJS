import React, {useEffect } from 'react';
import styled from 'styled-components'
function Timer({seconds,active,setSeconds,setActive}){

    function Stop(){
        setSeconds(0)
        setActive(false)
    }
    useEffect(()=>{
        let interval=null
        if(active){
          interval=setInterval(()=>{setSeconds(seconds+1)},1000)
          console.log(seconds)
        }else if (!active) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (
        <TimerCard>
            <div className="timer">
                <span>Timer Component</span>   
                <h1>Seconds: {seconds}</h1>   
            </div>
            <ButtonCard>
                <button onClick={Stop}
                >Stop and Remove Timer Component</button>  
            </ButtonCard>  
        </TimerCard>
    )
}

export default Timer

const TimerCard=styled.div `
    .timer{
        width: 100%;
        max-width: 600px;
        margin: 1rem auto;
        padding: 3rem!important;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
        box-sizing: border-box;
        h1{
            margin-top: 0;
            margin-bottom: .5rem;
            font-weight: 500;
            line-height: 1.2;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
            -webkit-font-smoothing: antialiased;
            color: #212529;
        }
    }
   
`
const ButtonCard=styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    button{
        cursor: pointer;
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
        align-self: center;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        border-radius: .25rem;
    }
    
`