import { Test, TestingModule } from '@nestjs/testing';
import { CRED } from 'src/app.entity';
import { AppService } from '..//app.service';

const mockAppService = () => ({
    findAll: jest.fn(() => []),
    storeData: jest.fn(() => "Some Value"),
    checkArray: jest.fn(() => true),
});

describe('AppService', () => {
    let appService: AppService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                {provide: AppService, useFactory: mockAppService},
            ],
        }).compile();

        appService = await app.get<AppService>(AppService);
    });

    describe('Service should be defined', () => {
        it('findAll function should be callable', () => {
            expect(appService.findAll()).toBeDefined();
        });

        it('storeData funbction should be callable', async() => {
            let subgraphData: CRED;
            expect(await appService.storeData(subgraphData)).toEqual('Some Value');
        });

        it('fn checkArray validation', async() => {
            expect(await appService.checkArray([])).toEqual(true);
        });
    })
});

