import {
  Component,
  Lead,
  MergingComponentWithIssues,
} from '../model/component.model';
import { issuesMock } from './issues.provider.mock';

export const componentsListMock: Component[] = [
  {
    self: '',
    id: '123',
    project: '',
    assigneeType: '',
    realAssigneeType: '',
    isAssigneeTypeValid: false,
    projectId: 123,
    name: 'mock name',
  },
  {
    self: '',
    id: '125',
    project: '',
    assigneeType: '',
    realAssigneeType: '',
    isAssigneeTypeValid: false,
    projectId: 125,
    name: 'mock name',
    lead: {
      self: 'https://herocoders.atlassian.net/rest/api/3/user?accountId=6231a277867a4e0070963ebe',
      accountId: '6231a277867a4e0070963ebe',
      avatarUrls: {
        '48x48':
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/AH-0.png',
        '24x24':
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/AH-0.png',
        '16x16':
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/AH-0.png',
        '32x32':
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/AH-0.png',
      },
      displayName: 'Andres Hevia',
      active: true,
    },
  },
];

export const mergingComponentsResult: MergingComponentWithIssues[] = [
  {
    ...componentsListMock[0],
    relatedIssues: issuesMock,
  },
];

export class ComponentsProviderMock {
  async fetchComponentsList(): Promise<Component[]> {
    return componentsListMock;
  }

  async getComponentsWithoutLead(): Promise<Component[]> {
    return this.fetchComponentsList().then((data) => [data[0]]);
  }
}
