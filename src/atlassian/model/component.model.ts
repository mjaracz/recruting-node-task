import { Issue } from './issue.model';

export interface Component {
  self: string;
  id: string;
  lead?: Lead;
  assigneeType: string;
  realAssigneeType: string;
  isAssigneeTypeValid: boolean;
  project: string;
  projectId: number;
  name: string;
}

export interface Lead {
  self: string;
  accountId: string;
  avatarUrls: Record<string, string>;
  displayName: string;
  active: boolean;
}

export interface MergingComponentWithIssues extends Component {
  relatedIssues: Issue[];
}
