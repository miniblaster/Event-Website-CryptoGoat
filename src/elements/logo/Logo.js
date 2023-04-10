import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({image}) => {
    return(
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <div className="d-flex align-items-center">
                    <img className="rounded-circle" src={process.env.PUBLIC_URL + image} alt="Corporate Logo" />
                    <h5 className="logo-text theme-gradient mb-0 ms-1">CRYPTOGOAT</h5>
                </div>
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
