import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderMobile } from '../redux/slices/mobilesSlice';
import { orderLaptopLessThan2Lakh, orderLaptopGreaterThan2Lakh } from '../redux/slices/laptopsSlice';

const ShopPage = () => {

    const dispatch = useDispatch();

    // Access laptop and mobile counts from Redux store
    const laptopCountLessThan2Lakh = useSelector((state) => state.laptops.stockLessThan2Lakh);
    const laptopOrdersLessThan2Lakh = useSelector((state) => state.laptops.orderslessThan2Lakh);
    const laptopCountGreaterThan2Lakh = useSelector((state) => state.laptops.stockGreaterThan2Lakh);
    const laptopOrdersGreaterThan2Lakh = useSelector((state) => state.laptops.ordersgreaterThan2Lakh);
    const mobileCount = useSelector((state) => state.mobiles.stock);
    const mobileOrders = useSelector((state) => state.mobiles.orders);

    // Handle mobile orders
    const handleMobileOrder = () => {
        if (mobileCount > 0) {
            dispatch(orderMobile()); // Dispatch the action to reduce mobile stock
        } else {
            // Handle out-of-stock scenario
            alert('Mobiles are out of stock.');
        }
    };

    // Handle laptop orders (worth less than 2 lakh)
    const handleLaptopOrderLessThan2Lakh = () => {
        if (laptopCountLessThan2Lakh > 0) {
            dispatch(orderLaptopLessThan2Lakh()); // Dispatch the action to reduce laptop stock (< 2 lakh)
        } else {
            // Handle out-of-stock scenario
            alert('Laptops are out of stock.');
        }
    };

    // Handle laptop orders (worth greater than 2 lakh)
    const handleLaptopOrderGreaterThan2Lakh = () => {
        if (laptopCountGreaterThan2Lakh > 0 && mobileCount > 0) {
            dispatch(orderLaptopGreaterThan2Lakh()); // Dispatch the action to reduce laptop stock (> 2 lakh)
            dispatch(orderMobile()); // Dispatch the action to reduce mobile stock
        } else {
            // Handle out-of-stock scenario
            alert('Laptops are out of stock.');
        }
    };

    return (
        <div>
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
            <h2 align='center'>Shop Page</h2>

            <div className="container mx-auto">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Mobile</h5>
                                <p className="card-text">Available: {mobileCount}</p>
                                <p className="card-text">Orders: {mobileOrders}</p>
                                <button className="btn btn-primary" onClick={handleMobileOrder}>
                                    Order Mobile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Laptop Card (Worth Less Than 2 Lakh) */}
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Laptop (&lt; 1 Lakh)</h5>
                                <p className="card-text">Available: {laptopCountLessThan2Lakh}</p>
                                <p className="card-text">Orders: {laptopOrdersLessThan2Lakh}</p>
                                <button className="btn btn-primary" onClick={handleLaptopOrderLessThan2Lakh}>
                                    Order Laptop
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Laptop Card (Worth Greater Than 2 Lakh) */}
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="card-title">Laptop (&gt; 1 Lakh)</h5>
                                <p className="offer-text">Get a Mobile Free</p>
                                <p className="card-text">Available: {laptopCountGreaterThan2Lakh}</p>
                                <p className="card-text">Orders: {laptopOrdersGreaterThan2Lakh}</p>
                                <button className="btn btn-primary" onClick={handleLaptopOrderGreaterThan2Lakh}>
                                    Order Laptop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                 
   
            </div>


            {/* Header for All Orders */}
            <nav class="navbar navbar-dark bg-primary">
                <div class="container d-flex justify-content-center">
                    <h3>All Orders</h3>
                </div>
            </nav>

            <div className="row mt-4">
                <div className="col-md-4 mx-auto">
                    <div className="card">
                        <div className="card-body text-center"> {/* Added 'text-center' class */}
                            <p className="total-order-text">Total Mobile Orders: {mobileOrders}</p> {/* Added 'total-order-text' class */}
                            <p className="total-order-text">Total Laptop Orders (Less Than 2 Lakh): {laptopOrdersLessThan2Lakh}</p> {/* Added 'total-order-text' class */}
                            <p className="total-order-text">Total Laptop Orders (Greater Than 2 Lakh): {laptopOrdersGreaterThan2Lakh}</p> {/* Added 'total-order-text' class */}
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
        </div>

    );
};

export default ShopPage;
