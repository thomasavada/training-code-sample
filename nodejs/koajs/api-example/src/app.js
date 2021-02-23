const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

// Set up body parsing middleware
app.use(koaBody());

// Require the Router we defined in books.js
let routes = require('./routes.js');

// Use the Router on the sub route /books
app.use(routes.routes());

app.listen(5000);
