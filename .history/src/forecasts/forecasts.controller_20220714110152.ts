import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { ForecastsService } from './forecasts.service';

@ApiTags('Forecasts')
@UseGuards(ApiKeyGuard)
@Controller('api/forecasts')
export class ForecastsController {
    constructor(private forecastsService: ForecastsService){}
    
    @ApiOperation({summary: 'Retorna un array de pronostico diario para los proximos 5 dias de una localizacion específica.'})
    @Get('daily/5days/:locationKey')
    getForecasts(@Param('locationKey') locationKey: string) {
        return this.forecastsService.getForecast5Days(locationKey);
    }


}
