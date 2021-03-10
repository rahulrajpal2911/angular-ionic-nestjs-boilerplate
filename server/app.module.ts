import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { UserModule } from './src/user/user.module';
import { ProductModule } from './src/product/product.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    UserModule,
    ProductModule
  ],
  controllers: []
})
export class ApplicationModule { }
