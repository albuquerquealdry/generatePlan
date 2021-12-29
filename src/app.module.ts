import { Module } from '@nestjs/common';
import { GenerateController } from './generate/generate.controller';
import { GenerateService } from './generate/generate.service';

@Module({
  imports: [],
  controllers: [GenerateController],
  providers: [GenerateService],
})
export class AppModule {}
