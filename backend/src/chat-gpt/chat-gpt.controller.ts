import { Body, Controller, Post, Sse, MessageEvent } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { Observable } from 'rxjs';

@Controller('chat-gpt')
export class ChatGptController {
    constructor(
        private openaiService: ChatGptService
    ) {
    }

    @Post('stream')
    @Sse()
    sse(@Body('content') content: string): Observable<MessageEvent> {
        return this.openaiService.getStreamData(content);
    }
}
