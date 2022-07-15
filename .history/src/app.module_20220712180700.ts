import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { ForecastsModule } from './forecasts/forecasts.module';
import { CurrentsModule } from './currents/currents.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:
    [
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      LocationsModule, ForecastsModule, CurrentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 /*  static port: number;
  static urlBaseAcuweather: string;
  static apiKeyAcuweather: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
    AppModule.urlBaseAcuweather = this.configService.get('URL_BASE_ACUWEATHER');
    AppModule.apiKeyAcuweather = this.configService.get('API_KEY_ACUWEATHER');
  } */

}
