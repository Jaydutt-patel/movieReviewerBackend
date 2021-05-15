import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  rating: Number,
  genre: String,
  year: Number,
  type: String,
  director: String,
  cast: String,
  tcode: String,
  img: Array
});

const Movie = new mongoose.model('movies', movieSchema);

export default Movie;