import { ComponentsProvider } from '../components.provider';
import { HttpService } from '@nestjs/axios';
import { ComponentsHttpServiceMock } from './components-http.service.mock';

describe('ComponentsProvider', () => {
  let componentsProvider: ComponentsProvider;

  beforeAll(() => {
    componentsProvider = new ComponentsProvider(
      new ComponentsHttpServiceMock() as HttpService,
    );
  });

  it('should be defined', () => {
    expect(componentsProvider).toBeDefined();
  });

  it('should return from method fetchComponentsList, list of all components', async () => {
    const componentsList = await componentsProvider.fetchComponentsList();
    expect(componentsList.length).toEqual(2);
  });
  it('should return from method getComponentsWithoutLead, list of filter components', async () => {
    const filterComponentsList =
      await componentsProvider.getComponentsWithoutLead();
    expect(filterComponentsList.length).toEqual(1);
  });
});
