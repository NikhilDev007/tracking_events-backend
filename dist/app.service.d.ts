import { Info } from './interface/subgraph.interface';
export declare class AppService {
    private readonly graphBaseUrl;
    constructor();
    findAll(): Promise<Info[]>;
    checkArray(array: any): boolean;
}
