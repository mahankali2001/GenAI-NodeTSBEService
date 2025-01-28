import express from 'express';
import { setChatRoutes } from './routes/chatRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setChatRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});