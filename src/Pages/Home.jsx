import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import Footer from '../Components/Footer';
import ExtraPart1 from '../Components/ExtraPart1';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const Movies = useLoaderData();
    const navigate = useNavigate();
    const [data, setData] = useState(Movies.slice(0, 6));

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div className='w-11/12 mx-auto text-center'>
            <div data-aos="fade-up">
                <Banner />
            </div>
            <h1 data-aos="fade-right">Total Movies: {Movies.length}</h1>
            
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
                {data.map(movie => (
                    <div key={movie._id} data-aos="zoom-in">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            
            <button className='btn mt-14 mb-14' onClick={() => navigate('/allMovies')} data-aos="fade-up">
                View All
            </button>
            
            <div data-aos="fade-left">
                <ExtraPart1 />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
