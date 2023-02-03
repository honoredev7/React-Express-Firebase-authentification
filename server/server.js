import express from 'express';
import cors from 'cors'
import authRouter from './routes/router.js';
import middleware from './middlewares/auth.js';

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(middleware.decodeToken);
// Routers
app.use('/api', authRouter);

app.listen(port, () => console.log(`Server is running on port : ${port}`))
