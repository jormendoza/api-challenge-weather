# Challenge Weather
Proyecto backend que permite operaciones de consulta a una api externa de pronóstico del clima.
***
## Tabla de contenidos
1. [Descripción](#descripción)
2. [Apis Usadas](#apis-usadas)
3. [Documentación de endpoints](#documentación-de-endpoints)
4. [Tecnologias](#tecnologías)
5. [Instalación](#instalación)
6. [Consultas](#consultas)


## Descripción
El sistema es un backend que permite la conexion con una api externa para la consulta de 
pronóstico actual y de los próximos 5 días para la ciudad especificada segun una localización  ip.

##  Apis Usadas

Para este proyecto se usó el servicio de Acu Weather:
https://developer.accuweather.com/apis
También el servicio de Ip-Api:
https://ip-api.com/docs/api:json



## Documentación de endpoints

El proyecto integra swagger, por lo que la documentación de la api se encuentra según el ambiente de ejecución en: http://{DIRECCION-IP}:{PORT}/apidoc/


## Tecnologías

 - Node con framework Nestjs 
 - Joi: para validar tipo de datos de variables de ambiente
 - Swagger: para la documentación de la api
 - Guards: para autenticar por api key la ejecucion de las apis
 - Config: para la coniguracion de variables de entorno para diferentes
   ambientes.
## Instalación
npm install permite instalar las dependencias de la aplicación.
Para que funcione, el desarrollador deberá proveer los archivos de ambiente con las configuración de las variables de ambiente.
**Archivos de ambiente:** Los archivos de ambiente .env deberán ser copiados en la raiz del proyecto.
**Auth Key**: los endpoint se ejecutan con un auth key que se debe incorporar en el header de la request. El campo es "Auth" y su valor lo debe proporcionar el desarrollador para que proceda al test.
**Ejecución:**
Ambiente dev:  npn run start:dev

## Consultas
Para contactarse con el desarrollador: jormendoza@gmail.com








