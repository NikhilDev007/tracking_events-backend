import { Injectable } from '@nestjs/common';
import { Info } from './interface/subgraph.interface';
import fetch from 'cross-fetch';

@Injectable()
export class AppService {
  private readonly graphBaseUrl: string;
  constructor() {
    this.graphBaseUrl = 
      'https://api.studio.thegraph.com/query/9451/event-tracking/0.0.11'
    
  }

  // used in app.controller to query data from subgraph
  async findAll(): Promise<Info[]> {
    const InfoQuery = {query:`
      query {
        userDatas{
          id
          USERNAME
          PASSWORD
      }
      }`
    };
    const InfoData = await fetch(this.graphBaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(InfoQuery),
    }).then((res) => res.json()).then((resJson) => {
      console.log(resJson?.data?.userDatas);
      return resJson?.data?.userDatas;
    });
    return this.checkArray(InfoData) ? InfoData : [];
  }

  checkArray(array): boolean {
    return Array.isArray(array) && array.length ? true : false;
  }
}
