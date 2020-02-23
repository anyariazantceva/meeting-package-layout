import React from "react";
import './Booking.css';

const Booking = () => {
    return (
        <div className="main__right booking">
            <div className="booking__head-title">Summary</div>
            <div className="booking__content">
                <div className="booking__title">
                    <div className="booking__bold">Title:</div>
                    <div className="booking__desc">Venue Luna House</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Picture:</div>
                    <div className="booking__desc">see the attachment</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Date:</div>
                    <div className="booking__desc">Friday, February 14, 2019 - 09:00 to 17:00</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Room:</div>
                    <div className="booking__desc">Lounge</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Delegates:</div>
                    <div className="booking__desc">10</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Price per delegate:</div>
                    <div className="booking__desc">55EUR</div>
                </div>
                <div className="booking__title">
                    <div className="booking__bold">Total price:</div>
                    <div className="booking__desc">550EUR</div>
                </div>
            </div>

        </div>
    )
};

export default Booking
