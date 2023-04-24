import './messages';
import { classMap } from './messages/classMap';
import { NmeaMessageInterface } from './messages/nmeaMessage.interface';

export function NmeaFactory<T extends NmeaMessageInterface>(className: string): new () => T {
  const classRef = classMap.get(className);
  if (!classRef) {
    throw new Error(`Class not found: ${className}`);
  }
  return classRef;
}

// export const NmeaService = {
//   isMessageImplemented(message: string): boolean {
//     const regex = /[A-Za-z]{5}/
//     const messageFiltered = message.match(regex)?.[0].toLowerCase();

//     return messageFiltered ? Messages.hasOwnProperty(messageFiltered) : false;
//   },

//   parseMessage(message: string, data: Array<string | number>): any {
//     const regex = /[A-Za-z]{5}/
//     const messageFiltered = message.match(regex)?.[0].toLowerCase();

//     if (!messageFiltered ){
//       throw new Error('Invalid message');
//     }

//     if (!this.isMessageImplemented(messageFiltered)) {
//       throw new Error('Message not implemented');
//     }

//     const messageKeys = Object.keys(Messages);

//     const messageData = message.split(',');
//     const messageClass = Messages[''];

//     return messageClass.parser(messageData);
//   }
// }