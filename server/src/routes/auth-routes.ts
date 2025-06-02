import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {  
    res.status(401).json({ message: 'Invalid username or password.' });
    return;
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    res.status(401).json({ message: 'Invalid username or password.' });
    return;
  }
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET || 'your-secret-key');
  res.json({ token });    
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
