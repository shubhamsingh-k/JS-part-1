
// API = "http://www.omdbapi.com/?i=tt3896198&apikey=58360e61&s=avenger"

const hamburger = document.querySelector("#hamburger")
const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput");
const movieHub = document.querySelector("#movieHub");

movieForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    let query = movieInput.value.trim()

    if(!query){
        return;
    }
    
    searchMovies(query);
})

async function searchMovies(movieName){

    movieHub.innerHTML = `<p>searching Movie...</p>`

    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=58360e61&s=${encodeURIComponent (movieName) }`)
     let data = await response.json()
     console.log(data);

     if(data.Response === "True") {
        displayMovies(data.Search);
        
     }
     else {
        console.log(data.Error);
        movieHub.innerHTML = `<p>${data.Error}</p>`
     }

     displayMovies(data.Search)
}


function displayMovies(movies){

    movieHub.innerHTML = "";

    

    movies.forEach((movie) => {

         const div = document.createElement("div");

         div.dataset.imdbID = movie.imdbID;
         div.setAttribute("class" , "movie-card")


    div.innerHTML =   `
        
        <div>
            <img src=${movie.Poster} alt="${movie.Title}">
        </div>

        <div>
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
        </div>
        `
      

      movieHub.append(div)
        
    });

}

    movieHub.addEventListener("click" , (e) => {
        e.stopPropagation();
        const movieCard = e.target.closest(".movie-card")
        const imdbID = movieCard.dataset.imdbID
        location.href = `movie-details.html?id=${imdbID}`


    })

    let data = [

    ]

    displayMovies(data)

    hamburger.addEventListener("click" , (e) => {
        e.stopPropagation();
         
        options.classList.toggle("hidden")
        console.log("hii");
    })


   
     
