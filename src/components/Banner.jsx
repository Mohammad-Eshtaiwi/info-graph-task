import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 image">
            <img src="./basket-of-vegetables.png" alt="Vegetables" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-12 details">
            <h2>Fresh &amp; Healthy Organic Vegetables</h2>
            <p>
              Our store offers you always fresh vegetables all year round. Buy from a wide range of high quality organic
              vegetables
            </p>

            <div>
              <button className="btn btn-green">Shop Now</button>
              <button className="btn btn-orange">Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
