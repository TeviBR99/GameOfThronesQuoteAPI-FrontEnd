import { House } from "src/app/houses/model/house.model";
import { Quote } from "src/app/quotes/model/quote.model";
import { ApiDto } from "src/app/shared/model/apidto.model";

export class Character extends ApiDto {
  house?: House;
  quotes?: Quote[]
}
