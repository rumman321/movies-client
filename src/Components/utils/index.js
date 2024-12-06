

// add favorite movie to localStore
const addFavorite=(movie)=>{
    // get all previous movie data 
   const favorites=getAllFavorites()
   const isExist=favorites.find(item=> item._id== movie._id)
   if(isExist){
    return alert('all added ')
   }
   favorites.push(movie)
   localStorage.setItem('favorites',JSON.stringify(favorites))
   alert("successfully added")
}

//get all favorite movie data
const getAllFavorites=()=>{
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites=JSON.parse(all)
        return favorites
    }else{
        return []
    }
    
}

export {addFavorite, getAllFavorites}