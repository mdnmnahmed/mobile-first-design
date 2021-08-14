import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
    const [toggleNavBar, setToggleNavBar] = useState(false);
    return (
        <>
            <nav className="nav-container">
                <div className="logo-section">
                    <a href="/">
                        <img src="../images/logo.png" alt="logo" width="25px" />
                    </a>
                    <div className="search-block">
                        <input className="search-input" type="text" placeholder="Search.." />
                        <img className="search-icon" className="" src="../images/icons/search.png" width="20px" />
                    </div>
                </div>

                <img className="menu-icon" src="../images/icons/menu-icon.png" width="25px" style={{ cursor: 'pointer' }}
                    onClick={() => setToggleNavBar(prevValue => !prevValue)}
                />

                <ul className={`menu-links ${toggleNavBar ? 'show-nav' : ''}`}>
                    <li> <a href="#"> Home </a></li>
                    <li> <a href="#"> About </a></li>
                    <li> <a href="#"> Contact </a></li>
                    <li> <a href="#"> Dev </a></li>
                    <li> <a href="#"> <img src="../images/logo.png" width="25px" /> </a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;