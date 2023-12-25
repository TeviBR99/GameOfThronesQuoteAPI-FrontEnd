import { Character } from "src/app/persons/model/character.model";
import { ApiDto } from "src/app/shared/model/apidto.model";

export class House extends ApiDto{
  members!: Character[];
}
