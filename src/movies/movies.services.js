//? funciones que van a manejar 2 cosas,  Todo lo relacionado con el request y el response

//! const {createNewMovie, findAllMovies, findMovieById} = require('./movies.controllers')
const movieControllers = require('./movies.controllers')

const getAllMovies = (req, res) => {
  movieControllers.findAllMovies()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(400).json(error)
    })
}
const getMovieById = (req, res) => {
  const id = Number(req.params.id)
  movieControllers.findMovieById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: 'Invalid ID' })
      }
    })
    .catch(error => {
      res.status(400).json(error)
    })
}
const postNewMovie = (req, res) => {
  const movieObj = req.body
 
  movieControllers.createNewMovie(movieObj)
      .then(data => {
          res.status(201).json(data)
      })
      .catch(error => {
          res.status(400).json(error)
      })
}

module.exports = {
  getAllMovies,
  getMovieById,
  postNewMovie
}
