import { SECRET } from '../utils/config.js';
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs';
import express from 'express';

export const loginRouter = express.Router();
import User from '../models/user.js';

loginRouter.post('/admin', async (request, response) => {
    const { password } = request.body;

    const user = await User.findOne({ type: 'admin' });
    const isPasswordCorrect = user === null ? false : await bcryptjs.compare(password, user.passwordHash);

    if (!user && !isPasswordCorrect) {
        return response.status(401).json({ error: 'wrong password' });
    }

    const userForToken = { username: user.username, id: user._id };
    const token = jwt.sign(userForToken, SECRET);

    response
        .status(200)
        .send({ token, username: user.username })
});
