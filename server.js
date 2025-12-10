import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import todoRouter from "./api/routes/todo.route.js"
import authRouter from "./api/routes/auth.route.js"

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Sample route
app.use('/todo', todoRouter);

app.use('/auth', authRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});