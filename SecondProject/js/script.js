/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

// 2 

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const addForm = document.querySelector("form.add");

    updateFilmList(movieDB.movies);
    makeChanges();
    deleteAds();
      
    addForm.addEventListener("submit", addFilm);

    function addFilm(a) {
        const addInput = addForm.querySelector(".adding__input");
        const checkbox = addForm.querySelector("[type='checkbox']");
        a.preventDefault();
        let film = addInput.value;
        if (film.length > 21) {
            film = film.substring(0, 21) + "...";
        } else if (film.length === 0 || film == null) {
            return;
        } 
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(film);
        updateFilmList(movieDB.movies.map(a=> a.toLowerCase()));
        a.target.reset();
    }

    function updateFilmList(movies) {
        movies.sort();
        const films = document.querySelector(".promo__interactive-list");
        films.innerHTML = "";
        movies.forEach((film, i) => {
            films.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
                                    <div class="delete"></div>
                                </li>`;
        });

        document.querySelectorAll(".delete").forEach((a, i) => 
        a.addEventListener("click", () => {
            movieDB.movies.splice(i, 1);
            updateFilmList(movieDB.movies);
        })); 
    }

    function deleteAds() {
        document.querySelectorAll(".promo__adv img").forEach(a => a.remove());
    }

    function makeChanges() {
        const promo = document.querySelector(".promo__bg");
        const genre = promo.querySelector(".promo__genre");
        genre.textContent = "ДРАМА";
        promo.style.backgroundImage = "url('img/bg.jpg')";
    }

});
