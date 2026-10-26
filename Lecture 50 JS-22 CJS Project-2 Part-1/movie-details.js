const params = new URLSearchParams(location.search)
const imdbID = params.get("id");

if (imdbID){
    searchMovie(imdbID.trim())
}
async function searchMovie(imdbID){


    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=58360e61&i=${imdbID}&plot=full`);
     let data = await response.json()
     console.log(data);

     if(data.Response === "True") {
        displayMovie(data.Search);
        
     }
     else {
        console.log(data.Error);
     }

    
}


function displayMovie(data){
    movieDetail
}