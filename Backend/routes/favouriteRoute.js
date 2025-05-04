const express = require('express');

const router = express.Router();

const { addFavorite,getFavorites,getFavoriteById,updateFavorite,deleteFavorite} = require('../controllers/favoriteController');

router.post('/', addFavorite);
router.get('/', getFavorites);
router.get('/:id', getFavoriteById);
router.patch('/:id', updateFavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;
