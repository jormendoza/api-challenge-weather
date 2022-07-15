import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LocationsModule } from './locations/locations.module'
import { ForecastsModule } from './forecasts/forecasts.module'
import { CurrentsModule } from './currents/currents.module'
import { ConfigModule } from '@nestjs/config'
import { environments } from './environments'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    LocationsModule,
    ForecastsModule,
    CurrentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly configService: ConfigService) {}
}
