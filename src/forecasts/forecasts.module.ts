import { HttpModule, Module } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ForecastsController } from './forecasts.controller';
import { LocationsService } from 'src/locations/locations.service';

@Module({
  imports: [HttpModule],
  providers: [ForecastsService, LocationsService],
  controllers: [ForecastsController]
})
export class ForecastsModule {}
