import { HttpService, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CurrentsService {
  constructor(private httpService: HttpService, private configService: ConfigService) {}

  async findDataCityWeather(ip: string): Promise<any> {
    try {
      // Get data city
      const urlBase = this.configService.get('URL_BASE_IP_API')
      const endpoint = '/json/' + ip
      const url = urlBase + endpoint
      const responseCity = await this.httpService.get(url).toPromise()

      console.log(responseCity.data)

      // Get location key for Acu-weather
      const urlBaseWeather = this.configService.get('URL_BASE_ACUWEATHER')
      const endpointWeather =
        '/locations/v1/cities/ipaddress' + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER') + '&q=' + ip
      const urlLocation = urlBaseWeather + endpointWeather
      const responseLocationKey = await this.httpService.get(urlLocation).toPromise()
      console.log(responseLocationKey.data)
      
      // Get current weather for location key
      /* const endpoint =
        '/currentconditions/v1/' + locationKey + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER')
      const url = urlBaseWeather + endpoint
      const response = await this.httpService.get(url).toPromise()
      return response.data */

      return {
        responseCity,
        responseLocationKey,
      }
    } catch (err) {
      return {
        message: err.message,
      }
    }
  }

  async getCurrentConditions(locationKey: string): Promise<any> {
    try {
      const urlBase = this.configService.get('URL_BASE_ACUWEATHER')
      const endpoint =
        '/currentconditions/v1/' + locationKey + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER')
      const url = urlBase + endpoint
      const response = await this.httpService.get(url).toPromise()
      return response.data
    } catch (err) {
      return {
        message: err.message,
      }
    }
  }
}
