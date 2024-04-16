const API_KEY = 'your_api_key_here';  // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

function searchMovies() {
    const query = document.getElementById('searchBox').value;
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const container = document.getElementById('moviesContainer');
            container.innerHTML = '';  // Clear previous results
            movies.forEach(movie => {
                container.innerHTML += `<div class="movie">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                </div>`;
            });
        });
}
