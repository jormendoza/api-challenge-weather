import { HttpModule, Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';

@Module({
  imports: [HttpModule],
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}
