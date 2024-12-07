import React, { useState } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import Footer from '../Components/Footer';

const Home = () => {
    const Movies=useLoaderData()
    const navigate=useNavigate()
    const [data,setData] = useState(Movies.slice(0, 6))
    
    
    return (
        <div className='w-11/12 mx-auto text-center'>
           <Banner></Banner>
           <h1>total movies : {Movies.length}</h1>

           <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {
                data.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
           <button className=' btn mt-14 mb-14' onClick={()=> navigate('/allMovies')}>View All</button>
           <Footer></Footer>
        </div>
    );
};

export default Home;