import React from "react";
import { Link } from "react-router-dom";

const PortfolioTwoItem = ({ portfolio }) => {
  console.log(portfolio)
  return (
    <div className="rwt-card p-5 h-100">
      <div className="inner d-flex flex-column justify-content-between h-100">
        <div className="thumbnail d-flex flex-column justify-content-center rounded-3 p-3 bg-light bg-gradient h-100">
          <figure className="card-image">
            <Link
              to={portfolio.url}
            >
              <img
                className="img-fluid"
                src={portfolio.image}
                alt="Portfolio-01"
              />
            </Link>
          </figure>
          <Link
            to={portfolio.url}
          ></Link>
        </div>
        <div className="content text-center">
          <h5 className="title mb--10">
            <Link
              to={portfolio.url}
            >
              {portfolio.url}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTwoItem;
