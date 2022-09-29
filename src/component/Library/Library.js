import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Library.css'

const Library = () => {
    const [subjects, setSubjects] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const showTimeOnCart = (subject) => {
        const newCart = [...cart, subject]
        setCart(newCart)
    }

    return (
        <div className='library-body'>
            <div className='library-container'>
                <h1 className='icon'><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> STUDY-HOUSE</h1>
                <h3>Select today's subject</h3>
                <div className='subject-container'>
                    {
                        subjects.map(subject => <Subject
                            subject={subject}
                            key={subject.id}
                            showTimeOnCart={showTimeOnCart}
                        ></Subject>)
                    }
                </div>
            </div>

            <div className='cart-body'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Library;