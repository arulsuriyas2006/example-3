const mongoose = require('mongoose');
const favoriteModel = require('../models/FavouriteModel');

const addFavorite = async (req, res) => {
    const { favouritedish } = req.body;
    try {
        const newFavorite = await favoriteModel.create({ favouritedish });
        res.status(200).json(newFavorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFavorites = async (req, res) => {
    try {
        const favorites = await favoriteModel.find({});
        res.status(200).json(favorites);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFavoriteById = async (req, res) => {
    const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid ID format' });
  }
    try {
        const favorite = await favoriteModel.findById(id);
        res.status(200).json(favorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const updateFavorite = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
      }
      try {
        const updatedFavorite = await favoriteModel.findByIdAndUpdate(
            {
                _id: id,
            },
            { ...req.body, }

        );
        res.status(200).json(updatedFavorite);
    }catch (error) {
        res.status(400).json({ error: error.message });
    }   
};
// Function to delete a favorite by ID
const deleteFavorite = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
      }
    try {
        const deletedFavorite = await favoriteModel.findByIdAndDelete(id);
        res.status(200).json(deletedFavorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { addFavorite , getFavorites,getFavoriteById,updateFavorite, deleteFavorite };