import axios from 'axios';
import { Deck, Hero } from './types';

const baseUrl = 'https://www.ringsdb.com/api/public';

export const getDeck = async (deckId: string) => {
  try{
    const deckFromApi = await axios.get<Deck>(`${baseUrl}/decklist/${deckId}`);
    const heroIds = Object.keys(deckFromApi.data.heroes);
    return heroIds;
  } catch(error){
    console.log('getDeck error: ', error);
  }
  return [];
};

export const getHero = async (id: string) => {
  try{
    const response = (await axios.get<Hero>(`${baseUrl}/card/${id}`)).data;
    
    // Create new hero obj from response
    const hero: Hero = {
      name: response?.name,
      threat: response?.threat,
      willpower: response?.willpower,
      attack: response?.attack,
      defense: response?.defense,
      health: response?.health,
      text: response?.text,
      traits: response?.traits,
      flavor: response?.flavor,
      imagesrc: response?.imagesrc
    };

    return hero;

  } catch (err){
    console.log(err);
    return null;
  }
};