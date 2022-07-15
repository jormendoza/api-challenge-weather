import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsModule } from './locations.module';
import { LocationsService } from './locations.service';

describe('LocationsController', () => {
  let controller: LocationsController;
  
  const mockLocationsService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsController],
      providers: [LocationsService],
    })
    .overrideProvider(LocationsService)
    .useValue(mockLocationsService)
    .compile();

    controller = module.get<LocationsController>(LocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
