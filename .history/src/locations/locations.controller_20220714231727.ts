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
    summary: 'Obtiene datos ubicacion city desde ip-api',
  })
  @Get('regions')
  getDataCity() {
    return this.locationsService.findDataCity();
  }


  @ApiOperation({
    summary: 'Obtiene una lista de regines geograficas disponibles',
  })
  @Get('regions')
  getRegions() {
    return this.locationsService.findAllRegions();
  }

  @ApiOperation({
    summary: 'Obtiene una lista de paises de una region geográfica que se recibe por parametro',
  })
  @Get('countries/:idRegion')
  getCountries(@Param('idRegion') idRegion: string) {
    return this.locationsService.findCountries(idRegion);
  }

  @ApiOperation({
    summary: 'Obtiene una lista de ciudades que coinciden con una búsqueda',
  })
  @Get('cities/search/:citySearch')
  getCitySearch(@Param('citySearch') citySearch: string) {
    return this.locationsService.searchCities(citySearch);
  }

  @ApiOperation({
    summary:
      'Obtiene una lista de provincias de una país que se recibe por parametro',
  })
  @Get('cities/:idCountry')
  getCities(@Param('idCountry') idCountry: string) {
    return this.locationsService.findCities(idCountry);
  }
}
