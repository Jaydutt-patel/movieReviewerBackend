import Movies from '../models/movie';
import { v1 } from 'uuid'

export const getAll = async () => {
  try {
    return await Movies.find();
  } catch (err) {
    throw new Error(`getAll Err: ${err}`);
  }
};

export const getById = async (id) => {
  try {
    const movies = await getAll();
    return movies.find((x) => x.id === id);
  } catch (err) {
    throw new Error(`getById Err: ${err}`);
  }
};

export const create = async (data) => {
  try {
    console.log('data', data);
    const movie = {
      id: v1(),
      name: data.name,
      description: data.description,
      rating: data.rating,
      genre: data.genre,
      year: data.year,
      type: data.type,
      director: data.director,
      tcode: data.tcode,
      img: data.img,
    };
    return await Movies.create(movie);
  } catch (err) {
    throw new Error(`Error while creating movie: ${err}`);
  }
};



