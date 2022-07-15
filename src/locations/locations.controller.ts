import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocationsService } from './locations.service';
import { ApiKeyGuard } from '../auth/guards/api-key.guard'

@ApiTags('Locations')
@UseGuards(ApiKeyGuard)
@Controller('location')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @ApiOperation({
    summary: 'Obtiene datos ubicacion city desde ip-api, segun la IP que recibe como parametro',
  })
  @Get(':ip')
  getDataCity(@Param('ip') ip: string) {
    return this.locationsService.findDataCity(ip);
  }
}
