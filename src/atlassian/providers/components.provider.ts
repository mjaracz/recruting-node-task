import { Injectable } from '@nestjs/common';
import { Component } from '../model/component.model';
import { AtlassianConstant } from '../atlassian.constant';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ComponentsProvider {
  constructor(private httpService: HttpService) {}
  async fetchComponentsList(): Promise<Component[]> {
    const fetchedComponentsList = firstValueFrom(
      this.httpService.get<Component[]>(
        `${AtlassianConstant.baseUrl}/rest/api/3/project/SP/components`,
      ),
    );
    return fetchedComponentsList.then((res) => res.data);
  }

  async getComponentsWithoutLead(): Promise<Component[]> {
    const componentsList = await this.fetchComponentsList();
    return componentsList.filter((component) => !component?.lead);
  }
}
