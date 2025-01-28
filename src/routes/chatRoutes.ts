import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

const router = Router();
const chatController = new ChatController();

export function setChatRoutes(app: Router) {
    app.post('/chat', chatController.handleChat.bind(chatController));
}

export default router;