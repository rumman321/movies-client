import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const Movies=useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
           <Banner></Banner>
           <h1>total movies : {Movies.length}</h1>
        </div>
    );
};

export default Home;