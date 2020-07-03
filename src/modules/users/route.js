const express = require('express');
const Route = express.Router()

const { getAllUsers, getDetailUser, insertUser, deleteUser, updateUser } = require('./controller')

const { auth } = require('../../middleware/auth')

Route
    .get('/', auth, getAllUsers)
    .get('/:id', getDetailUser)
    .put('/:id', updateUser)
    .post('/', insertUser)
    .delete('/:id', deleteUser)

module.exports = Route