import { Injectable } from '@nestjs/common';
import fetch from 'cross-fetch';
import { CRED } from './app.entity';

@Injectable()
export class AppService {
  private readonly graphBaseUrl: string;
  constructor() {
    this.graphBaseUrl =
      'https://api.studio.thegraph.com/query/9451/event-tracking/0.0.11'

  }

  /**
   * @notice used in app.controller to query data from subgraph
   * @returns Info[] contains id, username, password.
   */
  async findAll(): Promise<CRED[]> {
    // query userDatas from subgraph
    const InfoQuery = {
      query: `
      query {
        userDatas{
          id
          USERNAME
          PASSWORD
      }
      }`
    };
    // fetch the data from subgraph url currently deployed
    // when sending data to a web server, the data has to be a string.
    const InfoData = await fetch(this.graphBaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(InfoQuery),
    })
      .then((res) => res.json())
      .then((resJson) => {
        //console.log(resJson?.data?.userDatas);
        return resJson?.data?.userDatas;
    });
    //console.log(InfoData[0].id);
    return this.checkArray(InfoData) ? InfoData : [];
  }

  /**
   * @notice to check the return variable is array or not
   * @returns true: for array otherwise false.
   */
  checkArray(array): boolean {
    return Array.isArray(array) && array.length ? true : false;
  }

  /**
   * @notice function used to store data manually in another database.
   * @returns CRED contains id, username, password.
   */
  async storeData(subgraphData: CRED): Promise<CRED> {
    const { id, Userid, USERNAME, PASSWORD } = subgraphData;

    const info = new CRED();
    info.id = id;
    info.Userid = Userid;
    info.USERNAME = USERNAME;
    info.PASSWORD = PASSWORD;
    await info.save();
    return info;
  }


  /**
   * @notice function used to store data in another database obtained from subgraph.
   * @returns CRED[] contains id, username, password.
   */
   async storeAll(): Promise<CRED[]> {
    // query userDatas from subgraph
    const InfoQuery = {
      query: `
      query {
        userDatas{
          id
          USERNAME
          PASSWORD
      }
      }`
    };
    // fetch the data from subgraph url currently deployed
    // when sending data to a web server, the data has to be a string.
    const InfoData = await fetch(this.graphBaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(InfoQuery),
    })
      .then((res) => res.json())
      .then((resJson) => {
        return resJson?.data?.userDatas;
    });
    
    // store data directly into the database.
    const infoArray: any = [];
    for (let i = 0; i < InfoData.length; i++) {
      const info = new CRED();
    
      info.Userid = InfoData[i].id;
      info.USERNAME = InfoData[i].USERNAME;
      info.PASSWORD = InfoData[i].PASSWORD;

      await info.save();

      infoArray.push(info);
    }
    return infoArray;
  }
}
