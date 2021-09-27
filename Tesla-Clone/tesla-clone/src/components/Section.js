import React from 'react'
import styled from 'styled-components'
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText &&
                    <RightButton>
                    {rightBtnText}
                    </RightButton>
                }
                
            </ButtonGroup>
            <DownError src="/images/down-arrow.svg" />
            </Buttons>
           
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
   width:100vw;
   height:100vh;
   //background-size->means the background image will always fit the whole div , you won't be left with any empty spots in your div background-size
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
//    background-image:url('/images/model-s.jpg');
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:space-between;//vertical
   background-image:${props=>`url("/images/${props.bgImage}")`}
`
const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonGroup=styled.div `
    display:flex;
    margin-bottom:40px;
    @media (max-width:768px){
        flex-direction:column;
    }
    
`
const LeftButton=styled.div `
    background-color:rgb(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.80;
    text-transform:uppercase;
    font-size:13px; 
    cursor:pointer;
    margin:10px;

`
const RightButton=styled(LeftButton)`
    background-color:white;
    opacity:0.7;
    color:black;
`
const DownError=styled.img `
    margin-top:15px;
    height:40px;
    animation:animateDown infinite 1.5s;
`

const Buttons=styled.div`
     
`