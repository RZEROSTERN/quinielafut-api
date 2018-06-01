import Router from 'koa-router';
import log from "../libs/logger";
import listFilepaths from 'list-filepaths';
import fs from 'fs';

const userRouter = new Router({
    prefix: '/api/users'
});

userRouter.get('/login', async(ctx, next) => {
    ctx.status = 200;
    ctx.body = {success: true, data: "Hello world"};
});

module.exports = userRouter;