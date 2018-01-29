import { VehicleFamily } from "./vehicle-family";

export interface Zone {
    id: number;
    letter: string;
    vehicleFamilyDTO: VehicleFamily;
}