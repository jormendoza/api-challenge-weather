import { HttpService, Injectable } from '@nestjs/common';
import { AppModule } from '../app.module';

@Injectable()
export class LocationsService {

    constructor (private httpService: HttpService) {}

    async findAllRegions(): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/locations/v1/regions?apikey=' + AppModule.apiKeyAcuweather;
            const url =  urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();            
            return response.data;        
        } catch(err) {            
            return {
                message: err.message                         
            }
        }
    }    

    async findCountries(idRegion: string): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/locations/v1/countries/' + idRegion + '?&language=es-ar&apikey=' + AppModule.apiKeyAcuweather;
            const url =  urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();            
            return response.data;        
        } catch(err) {            
            return {
                message: err.message                         
            }
        }
    } 
    
    async findCities(idCountry: string): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/locations/v1/adminareas/' + idCountry + '?&language=es-ar&apikey=' + AppModule.apiKeyAcuweather;
            const url =  urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();            
            return response.data;        
        } catch(err) {            
            return {
                message: err.message                         
            }
        }
    } 

    async searchCities(citySearch: string): Promise<any> {
        try {
            const urlBase = AppModule.urlBaseAcuweather;
            const endpoint= '/locations/v1/cities/search?apikey=' + AppModule.apiKeyAcuweather + '&q=' + citySearch + '&details=true';
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
