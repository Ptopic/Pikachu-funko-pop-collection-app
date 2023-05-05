const db = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const schedule = require('node-schedule');
const jwt = require('jsonwebtoken');

exports.getFigures = async (req, res) => {
	res.send({ message: 'get' });
};

exports.updateFigure = async (req, res) => {
	res.send({ message: 'post' });
};
