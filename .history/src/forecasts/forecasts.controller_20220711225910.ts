import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ForecastsService } from './forecasts.service';

@ApiTags('Forecasts')
@Controller('api/forecasts')
export class ForecastsController {
    constructor(private forecastsService: ForecastsService){}
    
    @ApiOperation({summary: 'Retorna un array de pronostico diario para los proximos 5 dias de una localizacion específica.'})
    @Get('daily/5days/:locationKey')
    getForecasts(@Param('locationKey') locationKey: string) {
        return this.forecastsService.getForecast5Days(locationKey);
    }


}
