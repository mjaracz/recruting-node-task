import { MergingComponentWithIssues } from '../atlassian/model/component.model';

export const mergingComponentWithIssues: MergingComponentWithIssues[] = [
  {
    self: 'https://herocoders.atlassian.net/rest/api/3/component/10130',
    id: '10130',
    name: 'Backend',
    assigneeType: 'PROJECT_DEFAULT',
    realAssigneeType: 'PROJECT_DEFAULT',
    isAssigneeTypeValid: false,
    project: 'SP',
    projectId: 11349,
    relatedIssues: [
      {
        expand:
          'operations,versionedRepresentations,editmeta,changelog,renderedFields',
        id: '51259',
        self: 'https://herocoders.atlassian.net/rest/api/3/issue/51259',
        key: 'SP-155',
        fields: {
          components: [
            {
              self: 'https://herocoders.atlassian.net/rest/api/3/component/10130',
              id: '10130',
              name: 'Backend',
            },
          ],
        },
      },
    ],
  },
];

export class ComponentsServiceMock {
  async getMergingComponentWithIssues() {
    return mergingComponentWithIssues;
  }
}
