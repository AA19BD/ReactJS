import PropTypes from 'prop-types'
import React from 'react';

const Header = ({title,setShow,show}) => {
    return (
        <header className="header">
            <h1 >{title}</h1>
            <button className="btn" onClick={()=>setShow((prev)=>!prev)} >{show ? "Close" : "Show"}</button>
        </header>
    ) 
};

Header.defaultProps = {
    title:'Task Tracker2'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header;

