import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsService } from '../components.service';
import { IssuesProvider } from '../providers/issues.provider';
import { IssuesProviderMock } from './issues.provider.mock';
import { ComponentsProvider } from '../providers/components.provider';
import {
  ComponentsProviderMock,
  mergingComponentsResult,
} from './components.provider.mock';

describe('ComponentsService', () => {
  let componentsService: ComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComponentsService,
        { provide: ComponentsProvider, useClass: ComponentsProviderMock },
        { provide: IssuesProvider, useClass: IssuesProviderMock },
      ],
    }).compile();

    componentsService = module.get<ComponentsService>(ComponentsService);
  });

  it('should be defined', () => {
    expect(componentsService).toBeDefined();
  });
  it('should correct merging components with related issues', () => {
    componentsService
      .getMergingComponentWithIssues()
      .then((mergingComponents) => {
        expect(mergingComponents).toEqual(mergingComponentsResult);
      });
  });
});
