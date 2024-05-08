"use strict";

// if (1) {
//   console.log("OK!");
// } else {
//   console.log("error");
// }

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("много");
// } else {
//   console.log("ok");
// }

// num == 50 ? console.log("ok") : console.log("error");

const num = 50;
switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 51:
    console.log("верно");
    break;
  default:
    console.log("не в этот раз");
    break;
}


// const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?" , '');

// const personalMovieBD = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieBD.movies[a] = b;
//       personalMovieBD.movies[c] = d;

//       console.log(personalMovieBD);
