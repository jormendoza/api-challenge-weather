import { HttpModule, Module } from '@nestjs/common';
import { CurrentsService } from './currents.service';
import { CurrentsController } from './currents.controller';
import { LocationsService } from 'src/locations/locations.service';

@Module({
  imports: [HttpModule],
  providers: [CurrentsService, LocationsService],
  controllers: [CurrentsController]
})
export class CurrentsModule {}
