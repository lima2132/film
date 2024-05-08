"use strict";

// while (num < 55){
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// let result = '';
// let lenght = 7;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     continue;
//     i++;
//   } else {
//     console.log(i);
//   }
// }

const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
const personalMovieBD = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
 
//цикл For
 
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieBD.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

//Цикл While

// let i = 0;
// while (i < 2){
//     const a = prompt("Один из просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieBD.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// }

//Цикл do

let i = 0;
do {
  const a = prompt("Один из просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieBD.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
  i++;
}while(i < 2);



console.log(personalMovieBD);

if (personalMovieBD.count <= 10) {
  console.log("Просмоиренно довольно мало фильмов");
} else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
  console.log("Вы клсический зритель");
} else if (personalMovieBD.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Ошибка");
}
