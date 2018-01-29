import { VehicleFamily } from "./vehicle-family";
import { AppUser } from "./app-user";

export class Vehicle {
    
    private id: number;
    
    private enrollment: string;
    
    private name: string;
    
    private vehicleFamilyDTO: VehicleFamily;
    
    private appUserDTO: AppUser;

    constructor() {
        this.vehicleFamilyDTO = new VehicleFamily();
        this.appUserDTO = new AppUser();
    }

    public setId(id: number): void {
        this.id = id;
    }

}