import { Module } from '@nestjs/common';
import { GenerateController } from './generate/controller/generate.controller';
import { GenerateService } from './generate/service/generate.service';

@Module({
  imports: [],
  controllers: [GenerateController],
  providers: [GenerateService],
})
export class AppModule {}
