import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { ConfigType } from '@nestjs/config'; 
import { config } from './../../config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    let isAuth = false;
    if (authHeader === this.configService.) {
      isAuth = true;
    };

    if (!isAuth) {
      throw new UnauthorizedException('No tienes permitido el acceso - api challenge weather');
    }
    return isAuth;
  }
}
