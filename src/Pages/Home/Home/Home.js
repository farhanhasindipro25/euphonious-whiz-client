import React from 'react';
import SlidingBanner from '../SlidingBanner/SlidingBanner';

const Home = () => {
    return (
        <div>
            <SlidingBanner></SlidingBanner>
            <h3 className='text-center fw-bold'>Services</h3>
            <p className='text-center'>Check out the most demanding services provided by Euphonious Whiz</p>
        </div>
    );
};

export default Home;