import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Add_Movie from "../Pages/Add_Movie";
import All_Movies from "../Pages/All_Movies";
import My_Favorites from "../Pages/My_Favorites";
import Review from "../Pages/Review";
import AddMovieForm from "../Pages/Add_Movie";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/movie")
            
        },
        {
            path:"/addMovies",
            element:<AddMovieForm></AddMovieForm>
            
        },
        {
            path:"/allMovies",
            element:<All_Movies></All_Movies>,
            loader:()=>fetch("http://localhost:5000/movie")
        },
        {
            path:"/myFavorites",
            element:<My_Favorites></My_Favorites>
        },
        {
            path:"/review",
            element:<Review></Review>
        }
      ]
    },
  ]);