'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const Collection = require('./data-collection');

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ?  {dialectOptions: {
  ssl: {require: true, rejectUnauthorized: false
  }}}: {}
  const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
  const clothesModel = require('./clothes/model');
const foodModel = require('./food/model');

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
  module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}