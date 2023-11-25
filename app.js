const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
// const userController = require("./src/controllers/userController");

const app = express();
const port = 3000;

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use(userRoutes);

// app.get('/users', userController.getAllUsers);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



// CRUD routes for User model
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