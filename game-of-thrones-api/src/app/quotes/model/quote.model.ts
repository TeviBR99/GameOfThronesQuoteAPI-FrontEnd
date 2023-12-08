import { Character } from "src/app/persons/model/character.model";

export class Quote {
  id!: number;
  sentence!: string;
  character!: Character;
}
