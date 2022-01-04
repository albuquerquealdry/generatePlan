import { Body, Controller, Post } from '@nestjs/common';
import { GenerateDto } from '../dto/generate.dto';
import { GenerateService } from '../service/generate.service';

@Controller('generate')
export class GenerateController {
    constructor(private readonly generateService :  GenerateService){}
    @Post()
    userParseDate(@Body() generateDto : GenerateDto){
        return this.generateService.generateTokenDevPreprodWincoz(generateDto)
    }
}
