const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const conversationRouter = require('./conversationRouter');
const messageRouter = require('./messageRouter');
const postRouter = require('./postRouter');
const profileRouter = require('./profileRouter');


module.exports = {
    authRouter,
    userRouter,
    conversationRouter,
    messageRouter,
    postRouter,
    profileRouter
}