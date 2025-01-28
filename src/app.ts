import express from 'express';
import dotenv from 'dotenv';
import { setChatRoutes } from './routes/chatRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

setChatRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});