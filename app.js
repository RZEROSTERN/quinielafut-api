import http from "http";
import path from "path";
import Koa from "koa";
import BodyParser from "koa-bodyparser";
import Router from "koa-router";
import Serve from "koa-static";
import Mount from "koa-mount";
import Cors from "kcors";

const app = new Koa();
const mainRouter = Router();

const userRouter = require('./routes/User');

mainRouter.use('', userRouter.routes(), userRouter.allowedMethods());

app.use(BodyParser());
app.use(Cors({
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(mainRouter.routes()).use(mainRouter.allowedMethods());

const server = http.createServer(app.callback());

module.exports = server;