"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovie = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovie.movies[prompt("Один из последних просмотренных фильмов?")] = prompt("На сколько оцените его?");
personalMovie.movies[prompt("Один из последних просмотренных фильмов?")] = prompt("На сколько оцените его?");

console.log(personalMovie);