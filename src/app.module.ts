import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
