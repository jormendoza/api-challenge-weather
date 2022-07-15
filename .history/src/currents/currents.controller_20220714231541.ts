import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard'
import { CurrentsService } from './currents.service'

@ApiTags('Currents')
@UseGuards(ApiKeyGuard)
@Controller('current')
export class CurrentsController {
  constructor(private currentsService: CurrentsService) {}

  @ApiOperation({ summary: 'Retorna los datos de condiciones para una localizacion específica.' })
  @Get(':locationKey')
  getCurrents(@Param('locationKey') locationKey: string) {
    return this.currentsService.getCurrentConditions(locationKey)
  }

  
}
