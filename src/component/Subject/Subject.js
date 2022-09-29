import React from 'react';
import './Subject.css'

const Subject = (props) => {
    const { showTimeOnCart, subject } = props
    const { name, img, time } = subject
    return (
        <div className='single-subject'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Time: {time} m</h5>
            <button onClick={() => showTimeOnCart(subject)} className='button-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Subject;