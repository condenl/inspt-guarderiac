import { VehicleFamily } from "./vehicle-family";

//TODO find a way to keep it encapsulated
export class Zone {

    id: number;

    letter: string;

    vehicleFamilyDTO: VehicleFamily;

    constructor() {
        this.vehicleFamilyDTO = new VehicleFamily();
    }

}