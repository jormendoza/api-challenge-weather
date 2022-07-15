import { HttpService, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CurrentsService {
  constructor(private httpService: HttpService, private configService: ConfigService) {}

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
