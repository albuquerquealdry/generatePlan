import { Test, TestingModule } from '@nestjs/testing';
import { GenerateController } from '../../src/generate/controller/generate.controller';
import { GenerateService } from '../../src/generate/service/generate.service';

describe('GenerateController', () => {
  let service : GenerateService
  let controller: GenerateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateService],
      controllers: [GenerateController],
    }).compile();
    service = new GenerateService()
    controller = new GenerateController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
