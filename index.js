const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/Database');
const PORT = process.env.PORT || 8000;
const dotEnv = require('dotenv');
dotEnv.config({ path: 'config.env' });
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Origin', 'Content-Type, Authorization');
//     next();
// });

app.get('/', (req, res) => {
    res.status(200).send(`SERVER RUNNING IN PORT ${PORT}`);
});

const { authRouter, userRouter, conversationRouter, messageRouter, postRouter, profileRouter } = require('./src/Routers');
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/conversation', conversationRouter);
app.use('/message', messageRouter);
app.use('/post', postRouter);
app.use('/profile', profileRouter);

app.listen(PORT, '0.0.0.0', () => console.log(`SERVER RUNNING IN PORT ${PORT}`));
