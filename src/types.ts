export interface Hero{
  name: string,
  threat: number,
  willpower: number,
  attack: number,
  defense: number,
  health: number,
  text: string,
  traits: string,
  flavor: string,
  imagesrc: string
}

export interface Deck {
  heroes: [string] // Id's of heroes
}

export interface HeroIds {
  ids: string[]
}

export enum StatType {
  "threat" = 0,
  "willpower" = 1,
  "attack" = 2,
  "defense" = 3,
  "health" = 4
}

// export type HeroId = {id: string};