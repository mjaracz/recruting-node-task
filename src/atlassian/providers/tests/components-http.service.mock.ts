import { Observable } from 'rxjs';
import { componentsListMock } from '../../tests/components.provider.mock';
import {
  AxiosResponse,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import { HttpService } from '@nestjs/axios';
import { Component } from '../../model/component.model';

export class ComponentsHttpServiceMock {
  get(url: string): Observable<AxiosResponse<Component[]>> {
    return new Observable((subscriber) =>
      subscriber.next({
        data: componentsListMock,
        config: {} as InternalAxiosRequestConfig,
        request: {} as Request,
        headers: {} as AxiosResponseHeaders,
        status: 200,
        statusText: '',
      }),
    );
  }
}
