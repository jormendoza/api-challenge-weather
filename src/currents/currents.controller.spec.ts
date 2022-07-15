import { Test, TestingModule } from '@nestjs/testing';
import { CurrentsController } from './currents.controller';

describe('CurrentsController', () => {
  let controller: CurrentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentsController],
    }).compile();

    controller = module.get<CurrentsController>(CurrentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
