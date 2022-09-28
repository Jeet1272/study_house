import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Library.css'

const Library = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className='library-body'>
            <div>
                <h1>STUDY-HOUSE</h1>
                <h4>Select today's subject</h4>
                <div className='subject-container'>
                    {
                        subjects.map(subject => <Subject subject={subject}></Subject>)
                    }
                </div>
            </div>

            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Library;