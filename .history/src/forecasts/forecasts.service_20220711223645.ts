import { HttpService, Injectable } from '@nestjs/common';
import { AppModule } from '../app.module';

@Injectable()
export class ForecastsService {
    constructor (private httpService: HttpService) {}
    
    async getForecast5Days(locationKey: string): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + AppModule.apiKeyAcuweather;
            const url =  urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();            
            return response.data;        
        } catch(err) {            
            return {
                message: err.message                         
            }
        }
    }    


}
