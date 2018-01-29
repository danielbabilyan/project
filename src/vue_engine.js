const Vue = require('vue/dist/vue.min');
const app = require('./components/app');

var vue_engine = new Vue(app)

module.exports = vue_engine;