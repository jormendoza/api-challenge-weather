import { HttpService, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LocationsService } from 'src/locations/locations.service'

@Injectable()
export class ForecastsService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private locationsService: LocationsService,
  ) {}

  async findDataCityForecast(ip: string): Promise<any> {
    try {
      // Get data city by ip
      const responseCity = await this.locationsService.findDataCity(ip)

      // Get location key from Acu-weather by ip
      const urlBaseWeather = this.configService.get('URL_BASE_ACUWEATHER')
      const endpointWeatherLocationKey =
        '/locations/v1/cities/ipaddress' + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER') + '&q=' + ip
      const urlLocation = urlBaseWeather + endpointWeatherLocationKey
      const responseLocationKey = await this.httpService.get(urlLocation).toPromise()

      // Get forecast weather for location key from Acu-weather
      const endpointWeatherForecast =
        '/forecasts/v1/daily/5day/' +
        responseLocationKey.data.Key +
        '?apikey=' +
        this.configService.get('API_KEY_ACUWEATHER') +
        '&language=es-ar'
      const urlWeatherForecast = urlBaseWeather + endpointWeatherForecast
      const responseWeatherForecast = await this.httpService.get(urlWeatherForecast).toPromise()

      return {
        ipapiDataCity: responseCity.data,
        accuweatherLocationKey: responseLocationKey.data,
        accuweatherForecast: responseWeatherForecast.data,
      }
    } catch (err) {
      return {
        message: err.message,
      }
    }
  }

  async getForecast5Days(locationKey: string): Promise<any> {
    try {
      const urlBase = this.configService.get('URL_BASE_ACUWEATHER')
      const endpoint =
        '/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + this.configService.get('API_KEY_ACUWEATHER')
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
