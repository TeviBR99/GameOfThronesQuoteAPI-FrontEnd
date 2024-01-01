import { ApiDto } from "./apidto.model";

export class Utils{

  /* Private methods */
  private static countTimesRepeated<T extends ApiDto>(data: T[], element: T, position:number ):number{
    let timesRepeated = 1;
    for(let i=0; i<data.length; i++){
      if( position != i && data[i] == element){
        timesRepeated++;
      }
    }
    return timesRepeated;
  }

  /* Public methods */
  static checkIfExistsInArray<T extends ApiDto>(data: T[], element: T):boolean{
    return data.length > 0 && data.includes(element);
  }

  static dropRepeatedDataAndMerge<T extends ApiDto>(array1: T[]):T[]{
    let resArray: T[] = []
    for(let i=0; i<array1.length; i++){
      if( this.countTimesRepeated(array1,array1[i],i) == 1 ){
        resArray.push(array1[i])
      }
    }
    return resArray;
  }




}
