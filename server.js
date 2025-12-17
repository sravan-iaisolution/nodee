import express from "express";
import path from "path";
import authRouter from "./api/routes/auth.route.js";
import todoRouter from "./api/routes/todo.route.js";

const app = express();

// Fix for ES Modules (path resolution)
const __dirname = path.resolve();

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Set EJS as template engine
app.set("view engine", "ejs");

// Body parser for form data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});


// Routes
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

app.use("/", (req,res)=>{
  res.send('hello world')
});

// Start server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
