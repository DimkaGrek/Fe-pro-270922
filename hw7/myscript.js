window.onload = () => {
    const liElements = document.querySelectorAll('li');
    console.log(liElements);
    for (let li of liElements) { 
        console.log(li.innerHTML); // Task 2
        console.log(li.parentNode, 'parentBlock'); // Task 3
    }

    // Task 4
    let activeElem = document.querySelector('.active');
    console.log(activeElem, 'activeElem');
    console.log(activeElem.nextElementSibling, 'Sibling');

    let menu = document.querySelector('.menu-list');
    let [...childrens] = menu.children;
    let marker = false;
    let arr = [];
    for (let li of childrens) {
        console.log(li);
        if (marker) arr.push(li);
        if (li == activeElem) marker = true;
        
    }
    console.log(arr, 'new array of elements');

    // Task 5 (рік випуску, жанр, назву, кількість переглядів)
    function viewFilms(films) {
        for (let film of films) {
            const {year, genre, name, numViews} = film;
            console.log(year, genre, name, numViews);
        }
    }
    class FilmClass {
        constructor(year, genre, name, numViews) {
            this.year = year;
            this.genre = genre;
            this.name = name;
            this.numViews = numViews;
        }
    }
    let film1 = new FilmClass(2020, 'fantasy', 'Stargirl', 5);
    let film2 = new FilmClass(2021, 'detective', 'Where are you?', 10);
    let film3 = new FilmClass(2015, 'comedy', 'Servant of the people', 40);
    let films = [film1, film2, film3];
    // Task 6
    viewFilms(films.sort((a,b)=> a.year > b.year ? 1 : -1));
    // Task 7
    viewFilms(films.sort((a,b)=> a.numViews > b.numViews ? 1 : -1));

    // Task 8
    let allElements = document.querySelectorAll('header, footer, nav');
    console.log(allElements);

    // Task 9
    let allBodyElements = document.querySelector('body');
    console.log(allBodyElements.children);
    

}