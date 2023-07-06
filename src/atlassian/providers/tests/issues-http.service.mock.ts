import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IssuesRes } from '../../model/issue.model';
import { issuesResMock } from '../../tests/issues.provider.mock';

export class IssuesHttpServiceMock {
  get(url: string): Observable<AxiosResponse<IssuesRes>> {
    return new Observable((subscriber) =>
      subscriber.next({
        data: issuesResMock,
      } as AxiosResponse),
    );
  }
}
