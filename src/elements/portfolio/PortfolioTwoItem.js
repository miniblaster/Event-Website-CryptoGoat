import React from "react";
import { Link } from "react-router-dom";

const PortfolioTwoItem = ({ portfolio }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(portfolio.url, '_blank');
  };

  return (
    <div className="rwt-card p-3 h-100">
      <div className="inner d-flex flex-column justify-content-between h-100">
        <div className="thumbnail d-flex flex-column justify-content-center rounded-3 p-3 bg-light bg-gradient h-100">
          <figure className="card-image">
            <a
              href={'https://' + portfolio.url}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <img
                className="img-fluid"
                src={portfolio.image}
                alt="Portfolio-01"
              />
            </a>
          </figure>
          <a
            href={'https://' + portfolio.url}
            target={'_blank'}
            rel={'noreferrer'}
          ></a>
        </div>
        <div className="content text-center">
          <h5 className="title mb--10">
            <a
              href={'https://' + portfolio.url}
              target={'_blank'}
              rel={'noreferrer'}
            >
              {portfolio.url}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTwoItem;
