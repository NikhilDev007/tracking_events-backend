import { AppService } from './app.service';
import { Info } from './interface/subgraph.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllEvents(): Promise<Info[]>;
}
