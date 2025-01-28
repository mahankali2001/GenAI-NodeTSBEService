import axios from 'axios';

export class Bot {
    private apiKey: string;

    constructor() {
        this.apiKey = "";
    }

    public async sendMessage(userInput: string): Promise<string> {
        try {
            const apiUrl = process.env.OPENAI_URL || 'https://api.openai.com/v1/chat/completions';
            this.apiKey = process.env.OPENAI_API_KEY || "Missing in environment file!";

            if (!this.apiKey) {
                throw new Error('OPENAI_API_KEY is not defined in the environment variables');
            }
            
            const response = await axios.post(apiUrl, {
                model: process.env.OPENAI_MODEL,
                messages: [{ role: 'user', content: userInput }],
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            const botResponse = response.data.choices[0].message.content;
            return botResponse;
        } catch (error) {
            console.error('Error communicating with OpenAI API:', error);
            throw new Error('Failed to get response from bot');
        }
    }
}

// export default Bot;