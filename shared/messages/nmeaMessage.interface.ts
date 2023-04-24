export interface NmeaMessageInterface {
  messageLength: number
  parser(data: string[]): any
}