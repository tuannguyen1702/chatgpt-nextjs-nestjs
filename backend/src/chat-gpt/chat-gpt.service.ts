import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { Observable } from 'rxjs';

@Injectable()
export class ChatGptService {
    private readonly openai: OpenAI;
    constructor(
        private configService: ConfigService
    ) {
        this.openai = new OpenAI({ apiKey: this.configService.get<string>('openai.apiKey') });
    }
    getStreamData(content: string): Observable<{ data: MessageEvent; }> {
        return new Observable((subscriber) => {
            (async () => {
                try {
                    const streamData = await this.openai.chat.completions.create(
                        {
                            model: "gpt-4",
                            messages: [{ role: "user", content }],
                            temperature: 0.7,
                            stream: true
                        }).withResponse();

                    for await (const chunk of streamData.data) {
                        const res = chunk.choices[0];

                        if (res?.finish_reason === 'stop') {
                            subscriber.complete();
                        } else {
                            subscriber.next({ data: res?.delta?.content } as MessageEvent);
                        }
                    }
                } catch (error) {
                    subscriber.error(error);
                }

            })();
        });
    }
}
