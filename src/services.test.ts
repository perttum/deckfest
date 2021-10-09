import { getDeck, getHero } from './services';
import axios from "axios" ;

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Services', () => {
  test('getDeck(id:string) should return deck', async () => {
    const mockData = {'19056': 1, '302039': 1};
    const mockResponse = { data: {heroes: mockData } };
    mockAxios.get.mockResolvedValue(mockResponse);

    return getDeck('22799').then(res => expect(res).toEqual(['19056', '302039']));
  
  });

  test('getHero should return Hero', () => {
    const mockData = {
      name: 'MC Nugger',
      threat: '200',
      willpower: '1',
      attack: '1000',
      defense: '5',
      health: '200',
      text: 'MC is danger for himself too.',
      traits: 'Slow, dark.',
      flavor: 'Acid',
      imagesrc: 'imgUrl'
    };
    const mockResponse = { data: mockData};
    mockAxios.get.mockResolvedValue(mockResponse);

    return getHero('1000').then(res => expect(res).toEqual(mockData));
  });
});
