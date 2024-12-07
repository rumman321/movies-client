import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { addFavorite } from './utils';
import Swal from 'sweetalert2';

const Details = () => {
    const data=useLoaderData()
    console.log(data)
    const [movie,setmovie]=useState(data)
    const navigate = useNavigate()
    const {poster, title, genre, duration, releaseYear, summary, email ,_id}=movie

    //handle delete
    const handleDelete=(_id)=>{
      console.log(_id)

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          fetch(`http://localhost:5000/movie/${_id}`,{
              method:"DELETE"
          })
          .then(res=> res.json())
          .then(data=> {
              console.log(data)
              if(data.deletedCount > 0){
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your  movie has been deleted.",
                      icon: "success"
                      
                    });
                    // const remainingMovies = movie.filter(m => m._id !== _id);
                    //   setmovie(remainingMovies);
                      navigate("/allMovies")
              }
          })
          }
        });
  }

    // handleFavorite function
    const handleFavorite=(movie)=>{

      fetch(`http://localhost:5000/favorites`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(movie)
      })
      // console.log(movie)
        // addFavorite(movie)

    }
    return (
        <div className='mx-auto pt-32 flex items-center justify-center'>
            <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src={poster}
      alt={title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <p className="card-title">Title : {title}</p>
    <div className=' grid grid-cols-1  items-start justify-start gap-3 '>
    <p> Genre : {genre}</p>
    <p> Duration : {duration}minutes</p>
    <p> Release year : {releaseYear}</p>
    <p> Summary : {summary}</p>
    </div>
    
    <div className="card-actions flex gap-5">
      <button className="btn btn-primary" onClick={()=> handleDelete(_id)}>Delete</button>
      <button className="btn btn-primary" onClick={()=>handleFavorite(movie)}>Add Favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;