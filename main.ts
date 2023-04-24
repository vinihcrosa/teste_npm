import { NmeaFactory } from "./shared/NmeaFactory";

const message = "$TDAHA";

const regex = /[A-Za-z]{5}/
const messageFiltered = message.match(regex)?.[0];

console.log(messageFiltered);

const nmea = NmeaFactory("TDAHA");

const nmeaInstance = new nmea();

nmeaInstance.parser(["123", "456", "789"]);