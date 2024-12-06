import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const Home = () => {
    const Movies=useLoaderData()
    const navigate=useNavigate()
    return (
        <div className='w-11/12 mx-auto text-center'>
           <Banner></Banner>
           <h1>total movies : {Movies.length}</h1>

           <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {
                Movies.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
           <button className=' btn' onClick={()=> navigate('/allMovies')}>View All</button>
        </div>
    );
};

export default Home;