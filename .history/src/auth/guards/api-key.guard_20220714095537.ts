import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Auth');
    let isAuth = false;
    if (authHeader === 'test-challenge') {
      isAuth = true;
    };

    if (!isAuth) {
      throw new UnauthorizedException('No tienes permitido el acceso - api challenge weather');
    }
    return isAuth;
  }
}
