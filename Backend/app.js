require("./config/database").connect();
const authRouter = require('./router/auth');
const userRouter = require('./router/users');
const adminRouter = require('./router/admin');
const express = require("express");
const app = express();
const cors = require('cors');

 app.use(cors());
//Route App Register
app.use(express.json())
app.use('/ceremony', adminRouter);
app.use('/ceremony', authRouter); 
app.use('/ceremony', userRouter);

module.exports = app;
