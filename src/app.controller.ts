import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Info } from './interface/subgraph.interface';


@Controller('/home')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get('/events')
  async getAllEvents(): Promise<Info[]> {
    return this.appService.findAll();
  }
  
}
