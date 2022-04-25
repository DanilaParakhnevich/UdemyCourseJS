"use strict";

const questionNumber = 2;
const genreNumber = 3;

const personalMovie = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovie.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovie.count == '' || isNaN(personalMovie.count) || personalMovie.count == null) {
            personalMovie.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
        if (personalMovie.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovie.count >= 10 && personalMovie.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovie.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function(number) {
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
    },
    showDB: function() {
        if (!personalMovie.privat) {
            console.log(personalMovie);
        }
    },
    writeYourGenres: function(count) {
        for (let i = 0; i < count; ++i) {
            personalMovie.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (personalMovie.genres[i] == null) {
                --i;
            }
        }
        personalMovie.genres.forEach(a => console.log(`Любимый жанр #${personalMovie.genres.indexOf(a) + 1} - это ${a}`));
    },
    toggleVisibleMyDB: function() {
        personalMovie.privat = !personalMovie.privat;
    }
};

personalMovie.start();

personalMovie.detectPersonalLevel();

personalMovie.rememberMyFilms(questionNumber);

personalMovie.writeYourGenres(genreNumber);

personalMovie.showDB();

personalMovie.toggleVisibleMyDB();

personalMovie.showDB();