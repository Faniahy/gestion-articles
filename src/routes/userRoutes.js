// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUser);
router.get('/users', userController.getAllUsers);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
