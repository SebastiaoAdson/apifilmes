const API_KEY = "94d6ddd93db63868c339b12a2610f37e"

async function getMovies() {
   try {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    let data =await response.json();
    displayMovies(data.results);
   } catch (error) {
    console.log(error);
   } 
}
function displayMovies(movies){
 let movieElement = document.getElementById('movieContainer');
 movieElement.innerHTML = "";
 movies.forEach(movie =>{
    movieElement.innerHTML = `<h2>${movie.title} </h2>`
 });  
}