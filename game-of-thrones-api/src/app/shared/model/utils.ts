import { ApiDto } from "./apidto.model";

export class Utils{


  static checkIfExistsInArray<T extends ApiDto>(data: T[], element: T):boolean{
    return data.includes(element);
  }

}
