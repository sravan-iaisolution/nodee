import express from 'express';

const authRouter = express.Router();

// Sample auth route
authRouter.get('/c', (req, res) => {
  res.send('Hello, World!');
});

export default authRouter;