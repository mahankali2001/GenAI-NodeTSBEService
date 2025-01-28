export interface UserMessage {
    userId: string;
    message: string;
    timestamp: Date;
}

export interface BotResponse {
    botId: string;
    response: string;
    timestamp: Date;
}