import { HttpService, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class LocationsService {
  constructor(private httpService: HttpService, private configService: ConfigService) {}

  async findDataCity(ip: string): Promise<any> {
    try {
      const urlBase = this.configService.get('URL_BASE_IP_API')
      const endpoint = '/json/' + ip
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
