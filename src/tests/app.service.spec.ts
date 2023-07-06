import { AppService } from '../app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsService } from '../atlassian/components.service';
import { Logger } from '@nestjs/common';
import {
  ComponentsServiceMock,
  mergingComponentWithIssues,
} from './components.service.mock';
import * as fs from 'fs';

describe('AppService', () => {
  let appService: AppService;
  let logger: Logger;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: ComponentsService, useClass: ComponentsServiceMock },
        Logger,
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    logger = app.get<Logger>(Logger);
  });

  describe('when module init', () => {
    let loggerSpyOn: jest.SpyInstance;
    let writeFileSpyOn: jest.SpyInstance;

    beforeEach(() => {
      appService.onModuleInit();
      loggerSpyOn = jest.spyOn(logger, 'verbose');
      writeFileSpyOn = jest
        .spyOn(fs, 'writeFileSync')
        .mockImplementation((path, data) => ({}));
    });
    it('should be defined', () => {
      expect(appService).toBeDefined();
    });
    it('should log JSON components', () => {
      expect(loggerSpyOn).toHaveBeenCalled();
      expect(loggerSpyOn).toHaveBeenCalledWith(mergingComponentWithIssues[0]);
    });
    it('should write receive JSON to file', () => {
      expect(writeFileSpyOn).toHaveBeenCalled();
      expect(writeFileSpyOn).toHaveBeenCalledWith(
        './output.txt',
        JSON.stringify(mergingComponentWithIssues, null, 2),
      );
    });
  });
});
