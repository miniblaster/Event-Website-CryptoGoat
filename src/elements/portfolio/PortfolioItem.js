import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolio }) => {
  return (
    <div className="rwt-card">
      <div className="inner">
        <div className="thumbnail">
          <figure className="card-image rounded-circle">
            {/* <Link
              to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            > */}
              <img
                className="img-fluid"
                src={portfolio.image}
                alt="Portfolio-01"
                style={{aspectRatio: '1/1'}}
              />
            {/* </Link> */}
          </figure>
          {/* <Link
            to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            className="rwt-overlay"
          ></Link> */}
        </div>
        <div className="content text-center">
          <h5 className="title mb--10">
            {/* <Link
              to={process.env.PUBLIC_URL + `/portfolio-details/${portfolio.id}`}
            > */}
              {portfolio.name}
            {/* </Link> */}
          </h5>
          <span className="subtitle b2 text-capitalize">
            {portfolio.role}
          </span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItem;
