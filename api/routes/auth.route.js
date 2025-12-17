import express from 'express';

const authRouter = express.Router();

// Sample auth route
authRouter.get('/login', (req, res) => {
  const {username,error}=req.query

    return res.render('Auth/login/index', { username, error });

});

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render('Auth/login/index', {
      username,
      error: 'Username and password are required',
    });
  }

  res.render('Auth/login/successfull');
});


export default authRouter;