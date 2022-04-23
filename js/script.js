"use strict";
const questionNumber = 2;

let numberOfFilms;

const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();

detectPersonalLevel();

rememberMyFilms(questionNumber);

writeYourGenres(3);

showDB(personalMovie.privat);

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

function detectPersonalLevel() {
    if (personalMovie.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovie.count >= 10 && personalMovie.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovie.count >= 30){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function rememberMyFilms(number) {
    for (let i = 0; i < number; ++i) {
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
}

function showDB(hidden) {
    if (!hidden) {
        console.log(personalMovie);
    }
}

function writeYourGenres(count) {
    for (let i = 0; i < count; ++i) {
        personalMovie.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}