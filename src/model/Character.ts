import {Origin} from "./Origin";

export type Character = {
    id: number,
    name: string,
    status: string,
    image: string,
    // Origin ist ein eigener Datentyp für "Origin"-Objekte
    // An dieser Stelle völlig optional zu benutzen
    // ABER, wir sehen das unsere Typen andere Typen benutzen können
    origin: Origin
}