const movieInfo = document.getElementById('movieInfo');
const arrowDirection = document.getElementById('arrow');
const show_hidde = document.getElementById('show_hidde');

const showInfo = () => {
    movieInfo.style.display = 'block';
    arrowDirection.setAttribute("class", 'fas fa-chevron-up');
    show_hidde.setAttribute("onclick", 'closeInfo()');
    show_hidde.setAttribute("title", "See Less");
}
const closeInfo = () => {
    movieInfo.style.display = 'none';
    arrowDirection.setAttribute("class", 'fas fa-chevron-down');
    show_hidde.setAttribute("onclick", 'showInfo()');
    show_hidde.setAttribute("title", "See More");
}

//Creando la logica para leer el array de las peliculas
const moviesLength = movies.length;
var position = 0;
const titleMovie = document.getElementById('title');
const imgMovie = document.getElementById('image');
const synopsis = document.getElementById('synopsis');
const releaseDate = document.getElementById("release_date");
const actors = document.getElementById("actors");
const raiting = document.getElementById("raiting");
const genere = document.getElementById("genere");

const identifyMovie = () => {
    var total = 0;
    var lengthRaiting = 0;
    var average = 0;
    var lengthActors = movies[position].actors.length;
    var lengthGenres = movies[position].genres.length;
    var dateFormat = new Date(movies[position].releaseDate);
    actors.innerHTML = '<li id="actors"></li>';
    genere.innerHTML = '<li id="genere"></li>';
    titleMovie.innerHTML = movies[position].title;
    imgMovie.src = movies[position].posterurl;
    document.getElementById('image-container').setAttribute('title', movies[position].title);
    synopsis.innerHTML = movies[position].storyline;
    releaseDate.innerHTML = '<i class="fas fa-ticket-alt"></i>&nbsp;&nbsp;' + dateFormat.toDateString();
    for (let x = 0; x < lengthActors; x++) {
        actors.innerHTML = actors.innerHTML + '<li id="actors"><i class="fas fa-theater-masks"></i>&nbsp;&nbsp;' + movies[position].actors[x] + '</li>';
    }
    lengthRaiting = movies[position].ratings.length;
    for (let i = 0; i < lengthRaiting; i++) {
        total = total + movies[position].ratings[i];
        average = total / lengthRaiting;
    }
    raiting.innerHTML = '<i class="fas fa-star"></i>&nbsp;&nbsp;' + average.toFixed(2);
    for (let y = 0; y < lengthGenres; y++) {
        genere.innerHTML = genere.innerHTML + '<li id=genere><i class="fas fa-film"></i>&nbsp;&nbsp;' + movies[position].genres[y] + '</li>';
    }
}

const initMovie = () => {
    identifyMovie();
}
window.onload = initMovie();

const next = () => {
    position = position + 1;
    if (position > moviesLength - 1) {
        position = 0;
        identifyMovie();
    } else {
        identifyMovie();
    }
}

const previous = () => {
    position = position - 1;
    if (position < 0) {
        position = moviesLength - 1;
        identifyMovie();
    } else {
        identifyMovie();
    }
}
