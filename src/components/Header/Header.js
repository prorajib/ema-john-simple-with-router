import React from 'react';
import { NavLink } from 'react-router-dom';
import logo  from  '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" srcset="" />
            <nav>
                <NavLink to="/shop"
                style={({isactive})=>{
                    return{
                        display:"inline-block",
                        margin:"1rem 0",
                        color: isactive? "red": ""
                    };
                }}
                > Shop</NavLink>
                <NavLink to="/review"
                style={({isactive})=>{
                    return{
                        display:"inline-block",
                        margin: "1rem 0",
                        color: isactive? "red": ""
                    };
                }}
                >Order Review</NavLink>
                <NavLink to="/inventory"
                style={({isactive})=>{
                    return{
                        display: "inline-block",
                        margin:"1rem 0",
                        color: isactive? "red": ""
                    };
                }}
                >Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;