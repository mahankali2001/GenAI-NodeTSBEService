import axios from 'axios';

export class Bot {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public async sendMessage(userInput: string): Promise<string> {
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
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