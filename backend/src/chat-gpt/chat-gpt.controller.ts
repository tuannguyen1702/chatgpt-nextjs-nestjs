import { Body, Controller, Post, Sse, MessageEvent, Query } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { Observable, interval, map } from 'rxjs';

@Controller('chat-gpt')
export class ChatGptController {
    constructor(
        private openaiService: ChatGptService
    ) {
    }

    @Sse('stream')
    sse(@Query('content') content: string): Observable<MessageEvent> {
        return this.openaiService.getStreamData(content);
    }
}
