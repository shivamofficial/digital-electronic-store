import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero text-info  text-white text-center py-3">
        <div className="container">
          <h1 className="display-4">Welcome to Our Galaxy Store</h1>
          <p className="lead">
          Galaxy India official store helps you to discover All mobiles, laptop and tablet accessories, ecosystem products and many more.
          </p>
        </div>
      </section>
      
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center offer-text">
              <h2>Special Offer!</h2>
              <p>Buy a laptop worth more than ₹1 Lakh and get a <span className="offer-highlight">Get a Coupon upto 5000</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Phone</h5>
                <p className="card-text">Discover the latest mobile technology.</p>
                <Link to={`/mobile-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Gaimg-Laptop</h5>
                <p className="card-text">Experience powerful computing on the go.</p>
                <Link to={`/laptop-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Versatile Laptops</h5>
                <p className="card-text">Choose from a variety of laptops to suit your needs.</p>
                <Link to={`/laptop-stock`} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
