import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
    const {handleGoogleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleSign =()=>{
       
        handleGoogleSignIn()
        .then(res=>{
            navigate('/')
        })
    }
    return (
        <div>
              <h2 className='font-semibold '>Login With</h2>
            <div className='flex flex-col gap-5 mt-5'>
                <button className='btn' onClick={handleGoogleSign}><FcGoogle></FcGoogle>Login with Google</button>
                {/* <button className='btn'><FaGithub></FaGithub>Login with Github</button> */}
            </div>
        </div>
    );
};

export default GoogleLogin;