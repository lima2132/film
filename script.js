const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?" , '');

const personalMovieBD = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


      personalMovieBD.movies[a] = b;
      personalMovieBD.movies[c] = d;

      console.log(personalMovieBD);