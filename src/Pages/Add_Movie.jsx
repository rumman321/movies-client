import React, { useState } from "react";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import "./Add.css"
const AddMovieForm = () => {
  const genres = ["comedy", "drama", "horror", "action", "thriller", "romance"];
  const years = [2024, 2023, 2022, 2021]
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;
    const email = form.email.value;
    const newMovie = { poster, title, genre, duration, releaseYear, rating, summary, email };
    console.log(poster, title, genre, duration, releaseYear, rating, summary, email);

    const validateForm = () => {
      if (!poster || !/^https?:\/\/.+\..+/.test(poster)) {
        return "Please provide a valid image link for the movie poster.";
      }
      if (!title || title.length < 2) {
        return "Movie title must be at least 2 characters long.";
      }
      if (!genre) {
        return "Please select a genre.";
      }
      if (!duration || duration < 60) {
        return "Duration must be greater than 60 minutes.";
      }
      if (!releaseYear) {
        return "Please select a release year.";
      }
      if (!rating) {
        return "Please select a rating.";
      }
      if (!summary || summary.length < 10) {
        return "Summary must be at least 10 characters long.";
      }
      if (!email) {
        return "Email must be provided.";
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
      fetch('https://orchid-server-10.vercel.app/movie', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newMovie)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Movie Added!",
            text: "Your movie has been added successfully.",
          });
        });
    }
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text">abc</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poster">
            Movie Poster (URL):
          </label>
          <input
            type="text"
            name="poster"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
            Genre:
          </label>
          <select
            name="genre"
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
            Duration (minutes):
          </label>
          <input
            type="number"
            name="duration"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="releaseYear">
            Release Year:
          </label>
          <select
            name="releaseYear"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
           Rating: 
           </label> 
           <div className="rating-css">
             <Rating onClick={handleRating} ratingValue={rating} />
              </div>
         </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
            Summary:
          </label>
          <textarea
            name="summary"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
