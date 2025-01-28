import { Request, Response } from 'express';
import { Bot } from '../bot/bot';

export class ChatController {
    private bot: Bot;

    constructor() {
        this.bot = new Bot();
    }

    public async handleChat(req: Request, res: Response): Promise<void> {
        const userMessage = req.body.message;

        try {
            const botResponse = await this.bot.sendMessage(userMessage);
            res.json({ response: botResponse });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    }
}