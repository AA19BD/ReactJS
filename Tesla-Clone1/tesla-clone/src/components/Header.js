import React,{useState} from "react";
import styled from "styled-components"; 
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux";
function Header() {
  const [burgerStatus,setBurgerStatus]=useState(true);
  const cars=useSelector(selectCars);
  return(
      <Container>
        <a>
            <img src="/images/logo.svg" alt="tesla-logo" />
        </a>
        <Menu>
            {cars && cars.map((car,index)=>(
                <a key={index} href="#">{car}</a>
            ))}

        </Menu>
        <RightMenu>
            <a href="#">SHOP</a>
            <a href="#">TESLA ACCOUNT</a>
            <CustomMenu onClick={()=>setBurgerStatus(prev=>!prev)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(prev=>!prev)}/>
            </CloseWrapper> 
            {cars && cars.map((car,index)=>(
                <li><a key={index} href="#">{car}</a></li>
            ))}
        
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertrack</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Cybertrack</a></li>
           
        </BurgerNav>
      </Container>
  )
 
}

export default Header;

const Container=styled.div`
    min-height:50px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transfrom:uppercase;
        padding:0 25px;
        flex-wrap:no-wrap;
    }
    @media (max-width:768px){
        display:none;
    }
`
const RightMenu=styled.div `
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transfrom:uppercase;
        margin-right:10px;
        flex-wrap:no-wrap;
    }
`
const CustomMenu=styled(MenuIcon)`
    cursor:pointer;

`
const BurgerNav=styled.div `
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);
        a{
            font-weight:600;
        }
    }
`
const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`
const CloseWrapper=styled.div `
    display:flex;
    justify-content:flex-end;
`  