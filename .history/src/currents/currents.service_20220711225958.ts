import { HttpService, Injectable } from '@nestjs/common';
import { AppModule } from '../app.module';

@Injectable()
export class CurrentsService {
    constructor (private httpService: HttpService) {}
    
    async getCurrentConditions(locationKey: string): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/currentconditions/v1/' + locationKey + '?apikey=' + AppModule.apiKeyAcuweather;
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
