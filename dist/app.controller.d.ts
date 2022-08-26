import { CRED } from './app.entity';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllEvents(): Promise<CRED[]>;
    storeData(subgraphData: CRED): Promise<CRED>;
    storeAll(): Promise<CRED[]>;
}
