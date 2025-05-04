const mongoose = require('mongoose');
const userModel = require('../models/userModel');

const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await userModel.create({ username, email, password });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            { _id: id },
            { ...req.body, }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ID format' });
    }
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
