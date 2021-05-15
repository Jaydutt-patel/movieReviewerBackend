import express from 'express';
import {
  getAll,
  getById,
  create
} from '../controllers/movies';

const router = new express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await getAll();
    res.json(movies);
  } catch (err) {
    logger.error(err);
    res.status(500).send({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movies = await getById(req.params.id);
    res.json(movies);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

router.post('/create', async (req, res) => {
  try {
    if (await create(req.body)) {
      res.json({ status: 'ok' });
    } else {
      res.status(400).send({ message: `Bad Request` });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

export default router;
