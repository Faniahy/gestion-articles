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
//
// // Add a new user
// exports.createUser = async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
//
// // Get a specific user by ID
// exports.getUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         if (!user) {
//             res.status(404).json({ error: 'User not found' });
//             return;
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
//
// // Update a user by ID
// exports.updateUser = async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.userId,
//             req.body,
//             { new: true }
//         );
//         if (!updatedUser) {
//             res.status(404).json({ error: 'User not found' });
//             return;
//         }
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };
//
// // Delete a user by ID
// exports.deleteUser = async (req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.userId);
//         if (!deletedUser) {
//             res.status(404).json({ error: 'User not found' });
//             return;
//         }
//         res.status(204).send(); // No content in response for a successful deletion
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// app.get('/users', async (req, res) => {
//     const users = await User.findAll();
//     res.json(users);
// });
//
// app.get('/users/:id', async (req, res) => {
//     const user = await User.findByPk(req.params.id);
//     res.json(user);
// });
//
// app.post('/users', async (req, res) => {
//     const user = await User.create(req.body);
//     res.json(user);
// });
//
// app.put('/users/:id', async (req, res) => {
//     const user = await User.findByPk(req.params.id);
//     if (user) {
//         await user.update(req.body);
//         res.json(user);
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// });
//
// app.delete('/users/:id', async (req, res) => {
//     const user = await User.findByPk(req.params.id);
//     if (user) {
//         await user.destroy();
//         res.json({ message: 'User deleted' });
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// });