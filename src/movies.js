// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director)
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergAndDrama = moviesArray.filter((movie) => {
        const Spielberg = movie.director === "Steven Spielberg"
        const drama = movie.genre.includes("Drama")
        return Spielberg && drama;
    })
    if (moviesArray.length === 0) { return 0 }
    else { return spielbergAndDrama.length }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sum = moviesArray.reduce((accumulator, currentValue) => {
        if (!currentValue.score) { return accumulator + 0 }
        else { return accumulator + currentValue.score }
    }, 0)
    if (moviesArray.length === 0) { return 0 }
    else { return (Math.round((sum / moviesArray.length) * 100)) / 100 }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let index = 0;
    const suma = moviesArray.reduce((acc, currVal) => {
        if (currVal.genre.includes("Drama")) {
            if (!currVal.score) {
                index++
                return acc + 0
            } else {
                index++
                return acc + currVal.score
            }
        }
    }, 0)
    if (index === 0) { return 0 }
    else if (index > 0) {
        console.log(suma)
        return (Math.round((suma / index) * 100)) / 100
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = moviesArray.map((movie) => { return movie })
    copyMoviesArray.sort((a, b) => {
        if (a<b) {return -1}
        else if (a>1) {return 1}
        else { return 0}
    })
    return copyMoviesArray.splice(20,copyMoviesArray.length-20)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
