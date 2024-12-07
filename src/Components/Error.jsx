import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
              <h1 className='font-semibold text-red-600 text-center mt-20'> this route is not Available .</h1>

<Link to="/" className='btn py-3 px-3 btn-warning text-center mt-10'>Back to the Home Page</Link>
        </div>
    );
};

export default Error;