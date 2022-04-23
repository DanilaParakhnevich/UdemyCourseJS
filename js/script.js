"use strict";
const questionNumber = 2;

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < questionNumber; ++i) {
    let firstAnswer = prompt("Один из последних просмотренных фильмов?");
    if (firstAnswer == null || firstAnswer == '' || firstAnswer.length > 50) {
        --i;
        continue;
    }
    let secondAnswer = prompt("На сколько оцените его?");
    if (secondAnswer == null || secondAnswer == '') {
        --i;
        continue;
    }
    personalMovie.movies[firstAnswer] = +secondAnswer;
}

console.log(personalMovie);