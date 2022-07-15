import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsModule } from './locations.module';

describe('LocationsController', () => {
  let controller: LocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [LocationsModule],
      controllers: [LocationsController],
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
