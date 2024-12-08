import React from 'react';
import Swal from 'sweetalert2';

const FavCard = ({favorite,setfavorites,favorites}) => {
    const {poster, title, genre, duration, releaseYear, summary, email,_id}=favorite

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
            fetch(`https://orchid-server-10.vercel.app/favorites/${_id}`,{
                method:"DELETE"
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your favorite movie has been deleted.",
                        icon: "success"
                      });
                      // update the loaded  state
                      const remainingMovies = favorites.filter(m => m._id !== _id);
                      setfavorites(remainingMovies);
                }
            })
            }
          });
    }
    return (
        <div className='mx-auto pt-20'>
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
{/* <p> Summary : {summary}</p> */}
</div>
<div className="card-actions">
  
  <button className="btn btn-primary" onClick={()=>handleDelete(_id)} >Delete Favorites</button>
  
  
</div>
</div>
        </div>
    </div>
    );
};

export default FavCard;