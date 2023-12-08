import { House } from "src/app/houses/model/house.model";
import { Quote } from "src/app/quotes/model/quote.model";

export class Character {
  id!: number;
  charachterName!: string;
  slug!: string;
  house!: House;
  listOfQuotes!: Quote[]
}
