import { Body, Controller, Post } from '@nestjs/common';
import { GenerateService } from './generate.service';

@Controller('generate')
export class GenerateController {
    constructor(private readonly generateService :  GenerateService){}
    @Post()
    userParseDate(@Body() body){
        return this.generateService.create(body)

    }

}
