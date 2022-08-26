import { Body, Controller, Get, Post } from '@nestjs/common';
import { CRED } from './app.entity';
import { AppService } from './app.service';

// set route 'home' to response
// to make this controller need to define annnotation before class
@Controller('/home')
export class AppController {
  constructor(
    // define injected dependency 
    private readonly appService: AppService
  ) {}

  // to return/ reponse define method of route.
  
  // route to query data from subgraph. 
  @Get('/events')
  async getAllEvents(): Promise<CRED[]> {
    return this.appService.findAll();
  }
  
  // route to store data manually in database.
  @Post('/events')
  storeData(@Body() subgraphData: CRED): Promise<CRED> {
    return this.appService.storeData(subgraphData)
  }

  // route to store data directly in database obtained from subgraph.
  @Post('/store')
  storeAll(): Promise<CRED[]> {
    return this.appService.storeAll()
  }
}
