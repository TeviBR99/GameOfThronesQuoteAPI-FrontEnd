import { ApiDto } from "./apidto.model";

export class Utils{


  static checkIfExistsInArray<T extends ApiDto>(data: T[], element: T):boolean{
    return data.includes(element);
  }

  static dropRepeatedDataAndMerge<T extends ApiDto>(array1: T[]):T[]{
    let resArray: T[] = []

    for(let i=0; array1.length; i++){
      if( this.checkIfExistsInArray(array1,array1[i]) ){
        resArray.push(array1[i])
      }
    }

    return resArray;
  }

}
