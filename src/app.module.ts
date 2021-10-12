import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User1Module } from './user1/user1.module';

@Module({
  imports: [UserModule, User1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
