const express = require('express');

const router = express.Router();

const {addToCart,getCartItems,getCartItemById,updateCartItem,deleteCartItem} = require('../controllers/addtocartController');

router.post('/', addToCart);
router.get('/', getCartItems);
router.get('/:id', getCartItemById);
router.patch('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

module.exports = router;
