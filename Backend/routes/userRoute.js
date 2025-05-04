const express = require('express');

const router = express.Router();

const {addUser,getUsers,getUserById,updateUser,deleteUser} = require('../controllers/userController'); 

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);  

module.exports = router;
