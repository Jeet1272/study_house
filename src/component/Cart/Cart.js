import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let totalTime = 0;
    for (const subject of cart) {
        totalTime = totalTime + subject.time
    }
    const breakTimes = [10, 20, 30, 40, 50]
    const [time, setTime] = useState([])



    return (
        <div>
            <img src="" alt="" />
            <div>
                <h3>Bishwajeet Sarkar</h3>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div className='person-details'>
                <div>
                    <h3>75kg</h3>
                    <small>Weight</small>
                </div>
                <div>
                    <h3>5.9</h3>
                    <small>Height</small>
                </div>
                <div>
                    <h3>30yrs</h3>
                    <small>Age</small>
                </div>
            </div>
            <h4>Add A Break</h4>
            <div className='study-time'>
                {
                    breakTimes.map(time => (
                        <button className='btn-time'
                            type='button'
                            onClick={() => setTime(time)}>
                        </button>
                    ))
                }
            </div>
            <h4>Study Details</h4>
            <div className='study-time'>
                <h5>Study time</h5>
                <h5>{totalTime} m</h5>
            </div>
            <div className='study-time'>
                <h5>Break time</h5>
                <h5>{time} m</h5>
            </div>
            <button className='button-add'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;