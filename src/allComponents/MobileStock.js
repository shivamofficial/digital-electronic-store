import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderMobile } from '../redux/slices/mobilesSlice';

const MobileShop = () => {
    const mobileStock = useSelector((state) => state.mobiles.stock);
    const mobileOrders = useSelector((state) => state.mobiles.orders);
    const dispatch = useDispatch();

    const handleMobileOrder = () => {
        if (mobileStock > 0) {
            dispatch(orderMobile()); // Dispatch the action to order a mobile
        } else {
            // Handle out-of-stock scenario
            alert('Mobiles are out of stock.');
        }
    };

    return (

        <div><h2 align='center'>Mobile Shop</h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Mobile</h5>
                            <p className="card-text">Available Mobiles:  {mobileStock}</p>
                            <p className="card-text">Orders: {mobileOrders}</p>
                            <button onClick={handleMobileOrder} className="btn btn-primary">
                                Order Mobile
                            </button>
                        </div>
                    </div>
                </div>
            </div></div>
    );
};

export default MobileShop;
