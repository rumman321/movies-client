import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReviewCard from '../Components/ReviewCard';


const Review = () => {
  const reviews= useLoaderData()
  const genres = ["comedy", "drama", "horror", "action", "thriller", "romance"];
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target
    const poster=form.poster.value
    const title=form.title.value
    const genre=form.genre.value
    const summary=form.summary.value
    const name=form.name.value
    const photo=form.photo.value

    const review={ poster, title, genre, summary, name,photo }
    console.log( poster, title, genre,  summary, name,photo)
    const validateForm = () => {
    
        
      if (!poster ) {
        return "Please provide a valid image link for the movie poster.";
      }
      if (!title || title.length < 2) {
        return "Movie title must be at least 2 characters long.";
      }
      if (!genre) {
        return "Please select a genre.";
      }
      if (!name)  {
        return "Please provide your name.";
      }
     
      
      if (!summary || summary.length < 50) {
        return "Comment must be at least 50 characters long.";
      }
      if (!photo) {
        return "photo must be provided.";
      }
      return null;
    };

    const validationError = validateForm();
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: validationError,
      });
    } else {
      // send data to the server
    fetch('http://localhost:5000/review',{
      method:'POST',
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify(review)

  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      Swal.fire({ 
         icon: "success",
         title: "Movie Added!", 
         text: "Your review has been added successfully.", });
  })
      
      
    }

  }
    return (
      <div className='pt-28 w-11/12 mx-auto'>
        <div>
          <h1>total {reviews.length}</h1>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {
                reviews.map(review=> <ReviewCard key={review._id} review={review} ></ReviewCard>)
            }
           </div>
        </div>
        <div className="container mx-auto p-4 pt-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poster">
            Movie Poster (URL):
          </label>
          <input
            type="text"
            name="poster"
            // value={formData.poster}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Movie Title:
          </label>
          <input
            type="text"
            name="title"
            // value={formData.title}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
            Genre:
          </label>
          <select
            name="genre"
            // value={formData.genre}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
       
       
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
            Add Comments:
          </label>
          <textarea
            name="summary"
            // value={formData.summary}
            // onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
           
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
            Your Photo:
          </label>
          <input
            type="text"
            name="photo"
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
      </div>
    );
};

export default Review;