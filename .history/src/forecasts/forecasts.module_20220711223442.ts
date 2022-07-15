import { HttpModule, Module } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ForecastsController } from './forecasts.controller';

@Module({
  imports: [HttpModule],
  providers: [ForecastsService],
  controllers: [ForecastsController]
})
export class ForecastsModule {}
