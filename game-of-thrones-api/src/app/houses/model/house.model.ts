import { Character } from "src/app/persons/model/character.model";

export class House {
  name!: string;
  slug!: string;
  members!: Character[];
}
