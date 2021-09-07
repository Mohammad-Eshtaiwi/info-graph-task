import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
export default function HeaderInfo() {
  return (
    <div className="header__info d-none d-lg-block">
      <div className="container d-flex">
        <div className="header__info__data">
          <span className="header__info__phone">
            <FaPhone className="icon" />
            xxx - xxx xxx
          </span>
          <span className="header__info__location">
            <FaLocationArrow className="icon" />
            Maromora Road, Washington
          </span>
        </div>
        <div className="getStarted">
          <button className="btn btn-orange">Get Started</button>
        </div>
      </div>
    </div>
  );
}
