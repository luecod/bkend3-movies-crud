//? Este archivo tendra funciones que hagan acciones a la base de datos (tienen que retornar una promesa)

const moviesDB = []
let baseId = 1

const findAllMovies = async () => {
    return await moviesDB
}

const findMovieById = async (id) => {
    const filteredMovie = await moviesDB.find(movie => movie.id === id) 
    return filteredMovie
}

const createNewMovie = async (movieObj) => {
    const newMovie = {
        id: baseId++,
        title: movieObj.title,
        synopsis: movieObj.synopsis,
        director: movieObj.director,
        year: movieObj.year
    }

    await moviesDB.push(newMovie)

    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createNewMovie
}
