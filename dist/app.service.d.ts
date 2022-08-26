import { CRED } from './app.entity';
export declare class AppService {
    private readonly graphBaseUrl;
    constructor();
    findAll(): Promise<CRED[]>;
    checkArray(array: any): boolean;
    storeData(subgraphData: CRED): Promise<CRED>;
    storeAll(): Promise<CRED[]>;
}
