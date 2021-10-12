import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User1Module } from './user1/user1.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/dto/products.service';
import { ProductsModule } from './products/dto/products.module';

@Module({
  imports: [UserModule, User1Module, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
