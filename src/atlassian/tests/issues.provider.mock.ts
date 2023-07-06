import { Issue, IssuesRes } from '../model/issue.model';

export const issuesMock: Issue[] = [
  {
    fields: {
      components: [{ self: '', id: '123', name: 'component-related-example' }],
    },
    expand: '',
    id: '',
    self: '',
    key: '',
  },
];

export const issuesResMock: IssuesRes = {
  total: 123,
  expand: '',
  maxResults: 123,
  startAt: 123,
  issues: issuesMock,
};

export class IssuesProviderMock {
  async fetchIssuesByProject(project: string): Promise<IssuesRes> {
    return issuesResMock;
  }
}
