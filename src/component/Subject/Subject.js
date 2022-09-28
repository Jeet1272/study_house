import React from 'react';
import './Subject.css'

const Subject = (props) => {
    const { name, img, time } = props.subject
    return (
        <div className='single-subject'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Time: {time}</h5>
            <button>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Subject;