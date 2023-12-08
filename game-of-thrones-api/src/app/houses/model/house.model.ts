import { Character } from "src/app/persons/model/character.model";

export class House {
  id!: number;
  houseName!: string;
  slug!: string;
  listOfMembers!: Character[];
}
