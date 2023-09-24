const express = require('express');
const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFound = require('../errors/NotFound');

router.use(express.json());
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use((req, res, next) => {
  next(new NotFound('Такая страница не существует'));
});

module.exports = router;
