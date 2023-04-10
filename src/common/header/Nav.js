import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu link-hover">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#topics">Topics</a></li>
            <li><a href="/#speakers">Speakers</a></li>
            <li><a href="/#sponsors">Sponsors</a></li>
        </ul>
    )
}
export default Nav;
