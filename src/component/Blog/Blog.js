import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>How React Work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering our code.</p>
            <h3>Difference between props and state:</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h3>Uses of useEffect except load data:</h3>
            <p>
                1. Running on state change: validating input field<br></br>
                2. Running on state change: live filtering<br></br>
                3. Running on state change: trigger animation on new array value<br></br>
                4. Running on props change: updating fetched API data to get BTC updated price
            </p>
        </div>
    );
};

export default Blog;