import express from 'express';

const todoRouter = express.Router();

// Sample auth route
todoRouter.get('/sravan', (req, res) => {
  res.send('Hello sravan!');
});

export default todoRouter;