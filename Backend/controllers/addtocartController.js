const mongoose = require('mongoose');
const addtocartModel = require('../models/addtocartModel');

const addToCart = async (req, res) => {
    const { Thingsname } = req.body;
    try {
        const newItem = await addtocartModel.create({ Thingsname });
        res.status(200).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCartItems = async (req, res) => {
    try {
        const cartItems = await addtocartModel.find({});
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCartItemById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const cartItem = await addtocartModel.findById(id);
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const updatedItem = await addtocartModel.findByIdAndUpdate(
            { _id: id },
            { ...req.body, }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const deletedItem = await addtocartModel.findByIdAndDelete(id);
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = { addToCart, getCartItems, getCartItemById, updateCartItem, deleteCartItem };
