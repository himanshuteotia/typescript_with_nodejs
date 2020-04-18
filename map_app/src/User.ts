import faker, { fake } from "faker"; // if we import directly any JS module in typescript it show a varning "Could not find a declaration file for module 'faker'. "
// to remove this varning we have to to install type defination file like @types/faker can be available on npmjs or Definitely Typed project
import { Mappable } from "./CustomMap";
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return this.name;
  }
}

// export const color = "red";
// export default 'red'
