import { classMap } from "./classMap";
import { NmeaMessageInterface } from "./nmeaMessage.interface";

export type Tdaha = {
  head: string;
  time: string;
  lat: string;
  lon: string;
}

export class TDAHA implements NmeaMessageInterface{
  public head = '$TDAHA';
  public readonly messageLength = 3;
  
  public parser(data: string[]): Tdaha{
    console.log('entrou nessa joça');
    if(data.length !== this.messageLength){
      throw new Error('Invalid message length');
    }

    return {
      head: this.head,
      time: data[0],
      lat: data[1],
      lon: data[2],
    }
  }
}

classMap.set('TDAHA', TDAHA);