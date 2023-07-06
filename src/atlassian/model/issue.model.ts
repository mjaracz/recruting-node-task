export interface IssuesRes {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: Issue[];
}

export interface Issue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: {
    components?: IssueComponent[];
  };
}

export interface IssueComponent {
  self: string;
  id: string;
  name: string;
}
