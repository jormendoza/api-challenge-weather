import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard'
import { ForecastsService } from './forecasts.service'

@ApiTags('Forecasts')
@UseGuards(ApiKeyGuard)
@Controller('forecast')
export class ForecastsController {
  constructor(private forecastsService: ForecastsService) {}

  @ApiOperation({
    summary: 'Obtiene datos ubicacion city desde ip-api, segun la IP que recibe como parametro.  Tambien obtiene el estado del tiempo a 5 días para esa localización ',
  })
  @Get(':ip')
  getDataCityForecast(@Param('ip') ip: string) {
    return this.forecastsService.findDataCityForecast(ip);
  }
}
