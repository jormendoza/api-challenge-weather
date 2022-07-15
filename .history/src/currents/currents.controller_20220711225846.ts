import { Controller, Get, HttpService, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppModule } from '../app.module';
import { CurrentsService } from './currents.service';


@ApiTags('Currents')
@Controller('api/currents')
export class CurrentsController {
    constructor(private currentsService: CurrentsService){}
    
    @ApiOperation({summary: 'Retorna los datos de condiciones para una localizacion específica.'})
    @Get(':locationKey')
    getCurrents(@Param('locationKey') locationKey: string) {
        return this.currentsService.getCurrentConditions(locationKey);
    }

}
