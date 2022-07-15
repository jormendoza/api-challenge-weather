import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  
  // Creo app
  const app = await NestFactory.create(AppModule);
  
  // Carga de swagger, estara en http://dominio:puerto/apidoc
  const optionsSwagger = new DocumentBuilder()
    .setTitle('API Weather para Challenge')
    .setDescription('API Weather para el desarrollo de una aplicacion de consulta de condiciones del clima actual y pronostico')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, optionsSwagger);
  SwaggerModule.setup('apidoc', app, document);

  // Lanzo la aplicacion
  console.log('Escuchando en Puerto: ', app.get('ConfigService').get('PORT'));
  await app.listen(app.get('ConfigService').get('PORT'));
}
bootstrap();
