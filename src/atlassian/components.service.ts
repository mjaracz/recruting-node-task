import { Injectable } from '@nestjs/common';
import { ComponentsProvider } from './providers/components.provider';
import { IssuesProvider } from './providers/issues.provider';
import { Component, MergingComponentWithIssues } from './model/component.model';
import { Issue } from './model/issue.model';

@Injectable()
export class ComponentsService {
  constructor(
    private readonly componentsProvider: ComponentsProvider,
    private readonly issueProvider: IssuesProvider,
  ) {}

  async getMergingComponentWithIssues(): Promise<MergingComponentWithIssues[]> {
    const mergingComponentsIssues: Promise<[Component[], Issue[]]> =
      Promise.all([
        this.componentsProvider.getComponentsWithoutLead(),
        this.issueProvider.fetchIssuesByProject('SP').then((res) => res.issues),
      ]);

    return mergingComponentsIssues.then(
      ([components, issues]): MergingComponentWithIssues[] =>
        components.map((component): MergingComponentWithIssues => {
          const relatedIssues: Issue[] = issues.filter(
            ({ fields: { components: issueComponents } }) =>
              issueComponents.find(
                (issueComponent) => issueComponent.id === component.id,
              ),
          );

          return {
            ...component,
            relatedIssues: relatedIssues,
          };
        }),
    );
  }
}
