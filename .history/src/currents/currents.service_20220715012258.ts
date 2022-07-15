import { HttpService, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LocationsService } from 'src/locations/locations.service'

@Injectable()
export class CurrentsService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private locationsService: LocationsService,
  ) {}

  async findDataCityWeather(ip: string): Promise<any> {
    try {
      // Get data city by ip
      const responseCity = await this.locationsService.findDataCity(ip)

      // Get location key from Acu-weather by ip
      const urlBaseWeather = this.configService.get('URL_BASE_ACUWEATHER')
      const endpointWeatherLocationKey =
        '/locations/v1/cities/ipaddress' + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER') + '&q=' + ip
      const urlLocation = urlBaseWeather + endpointWeatherLocationKey
      const responseLocationKey = await this.httpService.get(urlLocation).toPromise()

      // Get current weather for location key from Acu-weather
      const endpointWeatherCurrent =
        '/currentconditions/v1/' +
        responseLocationKey.data.Key +
        '?apikey=' +
        this.configService.get('API_KEY_ACUWEATHER') +
        '&language=es-ar'
      const urlWeatherCurrent = urlBaseWeather + endpointWeatherCurrent
      const responseWeatherCurrent = await this.httpService.get(urlWeatherCurrent).toPromise()

      return {
        ipapiDataCity: responseCity,
        accuweatherLocationKey: responseLocationKey.data,
        accuweatherCurrent: responseWeatherCurrent.data,
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
