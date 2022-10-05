import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers.authorization) {
      return false;
    }
    ctx.user = await this.validateToken(ctx.headers.authorization);
    return true;
  }
  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'bearer') {
      throw new HttpException(
        'invalid token signature',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const token = auth.split(' ')[1];
    try {
      return await jwt.verify(token, 'shaby123');
    } catch {
      throw new HttpException('invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
