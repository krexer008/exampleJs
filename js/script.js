"use strict";
/*
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        let numberOfFilms;
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?');
            const b = prompt('На сколько оцените его?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваши любимые жанры через запятую`).toLocaleLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные!');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр #${i+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

//personalMovieDB.start();

//personalMovieDB.rememberMyFilms();

//personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

//personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
*/

const box = document.getElementById("box");

const btns = document.getElementsByTagName("button");

const circls = document.getElementsByClassName("circle");

const hearts = document.querySelectorAll(".heart");

hearts.forEach((item) => {
  console.log(item);
});

//по селектору
const oneHeart = document.querySelector("button");

console.log(oneHeart);
