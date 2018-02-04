const Vue = require('vue/dist/vue.min');
const app = require('./app');

var vue_engine = new Vue(app)

module.exports = vue_engine;