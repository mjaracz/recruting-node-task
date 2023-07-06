import { IssuesProvider } from '../issues.provider';
import { IssuesHttpServiceMock } from './issues-http.service.mock';
import { HttpService } from '@nestjs/axios';
import { IssuesRes } from '../../model/issue.model';

describe('IssuesProvider', () => {
  let issuesProvider: IssuesProvider;

  beforeAll(() => {
    issuesProvider = new IssuesProvider(
      new IssuesHttpServiceMock() as HttpService,
    );
  });

  it('should fetch issues by project', async () => {
    const issuesRes: IssuesRes = await issuesProvider.fetchIssuesByProject(
      'SP',
    );
    expect(issuesRes.issues.length).toBeGreaterThan(0);
  });
});
