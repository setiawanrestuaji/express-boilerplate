const express = require('express');
const Route = express.Router();

const userRoute = require('../modules/users/route')

Route
    .use(`/api/v1/user`, userRoute)

module.exports = Route