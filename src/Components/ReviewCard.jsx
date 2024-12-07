import React from 'react';

const ReviewCard = ({review}) => {

    const { poster, title, genre, summary, name,photo }=review
    return (
        <div>
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
<p>  {summary}</p>
<div className='flex items-center gap-2'>
    <img className='w-[50px] rounded-full' src={photo} alt="" />
    <p>{name}</p>
</div>

{/* <p> Summary : {summary}</p> */}
</div>
<div className="card-actions">
  
  <button className="btn btn-primary"  >Delete Review</button>
  
  
</div>
</div>
        </div>
        </div>
    );
};

export default ReviewCard;