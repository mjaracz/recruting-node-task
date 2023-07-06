import { Injectable } from '@nestjs/common';
import { AtlassianConstant } from '../atlassian.constant';
import { IssuesRes } from '../model/issue.model';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class IssuesProvider {
  constructor(private readonly httpService: HttpService) {}
  fetchIssuesByProject(project: string): Promise<IssuesRes> {
    const fetchedIssues = firstValueFrom(
      this.httpService.get<IssuesRes>(
        `${AtlassianConstant.baseUrl}/rest/api/3/search?jql=project=${project}&fields=components`,
      ),
    );
    return fetchedIssues.then((res) => res.data);
  }
}
