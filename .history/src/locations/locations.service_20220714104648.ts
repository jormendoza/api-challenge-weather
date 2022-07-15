import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LocationsService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
    ) { }

    async findAllRegions(): Promise<any> {
        try {
            const urlBase = this.configService.get('URL_BASE_ACUWEATHER');
            const endpoint = '/locations/v1/regions?apikey=' + this.configService.get('API_KEY_ACUWEATHER');
            const url = urlBase + endpoint;
            console.log(url);

           /*  const response = await this.httpService.get(url).toPromise();
            return response.data; */
            return {
                url,
                port: this.configService.get('PORT'),
            }
            
        } catch (err) {
            return {
                message: err.message
            }
        }
    }

    async findCountries(idRegion: string): Promise<any> {
        try {
            const urlBase = this.configService.get('URL_BASE_ACUWEATHER');
            // const urlBase = AppModule.urlBaseAcuweather;
            const endpoint = '/locations/v1/countries/' + idRegion + '?&language=es-ar&apikey=' + this.configService.get('API_KEY_ACUWEATHER');
            const url = urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();
            return response.data;
        } catch (err) {
            return {
                message: err.message
            }
        }
    }

    async findCities(idCountry: string): Promise<any> {
        try {
            const urlBase = this.configService.get('URL_BASE_ACUWEATHER');
            const endpoint = '/locations/v1/adminareas/' + idCountry + '?&language=es-ar&apikey=' + this.configService.get('API_KEY_ACUWEATHER');
            const url = urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();
            return response.data;
        } catch (err) {
            return {
                message: err.message
            }
        }
    }

    async searchCities(citySearch: string): Promise<any> {
        try {
            const urlBase = this.configService.get('URL_BASE_ACUWEATHER');
            const endpoint = '/locations/v1/cities/search?apikey=' + this.configService.get('API_KEY_ACUWEATHER') + '&q=' + citySearch + '&details=true';
            const url = urlBase + endpoint;
            const response = await this.httpService.get(url).toPromise();
            return response.data;
        } catch (err) {
            return {
                message: err.message
            }
        }
    }


}
