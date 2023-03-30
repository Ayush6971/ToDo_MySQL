'use strict';
const Sequelize = require('sequelize');
require('dotenv').config({})
const db = {};

let sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
