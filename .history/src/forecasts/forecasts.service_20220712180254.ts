import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ForecastsService {
    constructor (private httpService: HttpService, private configService: ConfigService) {}
    
    async getForecast5Days(locationKey: string): Promise<any> {
        try {
            const urlBase = this.configService.get('URL_BASE_ACUWEATHER');
            const endpoint= '/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER');
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
