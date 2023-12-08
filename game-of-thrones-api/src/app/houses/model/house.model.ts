import { Character } from "src/app/persons/model/character.model";

export class House {
  id!: number;
  name!: string;
  slug!: string;
  members!: Character[];
}
