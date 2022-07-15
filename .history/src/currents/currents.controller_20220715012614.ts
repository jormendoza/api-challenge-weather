import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard'
import { CurrentsService } from './currents.service'

@ApiTags('Currents')
@UseGuards(ApiKeyGuard)
@Controller('current')
export class CurrentsController {
  constructor(private currentsService: CurrentsService) {}

  @ApiOperation({
    summary: 'Obtiene datos ubicacion city desde ip-api, segun la IP que recibe como parametro.  Tambien obtiene l estado del tiempo actual para esa localización',
  })
  @Get(':ip')
  getDataCityWeather(@Param('ip') ip: string) {
    return this.currentsService.findDataCityWeather(ip)
  }
}
