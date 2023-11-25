const User = require('../models/User');

// Get list of all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// Add a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({ success: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a specific user by ID
exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByPk(req.params.userId);
        if (updatedUser) {
            await updatedUser.update(req.body);
        } else {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByPk(req.params.userId);
        if (!deletedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        } else {
            await deletedUser.destroy()
        }
        res.status(200).json({ success: 'User deleted' }); // No content in response for a successful deletion
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};