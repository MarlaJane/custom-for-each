/**

    Why do we loop?

    Many, many reasons.

    Some examples:

    - Basic
    
        - Got a list of todo's and need to print them all

        - Got a list of students and need to print them all

    - Calculating

        - Got a list of dogs and need to calculate all of their ages in years

        - Got a list of expenses and need to get a total

        - Got a list of grades and need the average

    - Filtering

        - Got a list of homework and need to list what is incomplete

        - Got a list of movies and need to show only movies not yet watched

        - Got a list of movies and need to show only Comedy

        - Got a list of dates and need only the holidays

        - Got a list of instruments and need only the wind

        - Got a list of doctors appointments and only need the vaccination dates

        - Got a roster of players and only need the point guards (PG)

        - Got a list of beers and want the ones you have not had in over a year

        - Got a list of restaurants and want the soul and italian

        - Got a list of planes and want all that seat more than one person such as a c-130


        etc, etc, etc, etc, etc

 */

 /**
  * Below is our own version of a forEach loop
  * This is very close logic to what the Array.forEach method code might look like if we could see it
  * This method calls a given function for every item in a given array
  *
  * We don't need a function like this except to conceptualize 
  * We would always use a `forEach` loop instead of something custom like this
  * But we have this here so we can try to better understand how `forEach` does what it does
  *
  * Takes two parameters. 
  * - An array 
  * - A function that will be called for each item in the array. aka the `callback`
  */
function callAFunctionForEachItem (items, callback) {
    for (var i = 0; i < items.length; i++) {
        const item = items[i]

        // X likes this part. The callback is where an action occurs.
        // execute the function that was sent as the second parameter
        // send three parameter values to the function; the item, the index position and also the full arrays
        callback(item, i, items)
    }
}

const movies = [{
    name: 'Hot Rod',
    type: 'Comedy'
}, {
    name: 'Friday',
    type: 'Comedy'
}, {
    name: 'Barber Shop',
    type: 'Comedy'
}, {
    name: 'Black Panther',
    type: 'Action'
}, {
    name: 'King Kong',
    type: 'Action'
}, {
    name: 'The Ring',
    type: 'Horror'
}]

let horrorMovies = []

// call our custom function that works a lot like an Array `forEach` method
callAFunctionForEachItem(movies, function (movie) {
    // Destructuring here to have short variables 
    // We do this rather than having to repeatedly reference `movie.type` and `move.name`
    // we could also write this as `const type = movie.type` and then `const name = movie.name`
    const {type, name} = movie
    
    if ('Horror' ===  type) {
        horrorMovies.push(name)
    }

})

/** Let's do that again but building the new list of comedies */

let comedies = []

// Note that there are two parameters
// Note that is differs slightly from when we use Array.forEach which only takes the callback parameter
// In our custom function we have to provide the array value 
// The second parameter is our custom `callback` function
callAFunctionForEachItem(movies, function (movie) {
    // Destructuring here to have short variables 
    // We do this rather than having to repeatedly reference `movie.type` and `move.name`
    // we could also write this as `const type = movie.type` and then `const name = movie.name`
    const {type, name} = movie
    
    if ('Comedy' ===  type) {
        comedies.push(name)
    }

})

// visualize what the computer sees at this point
console.log({horrorMovies, comedies})


