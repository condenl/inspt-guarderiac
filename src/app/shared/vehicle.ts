import { VehicleFamily } from "./vehicle-family";
import { AppUser } from "./app-user";
import { Photo } from "./photo";

export class Vehicle {
    
    id: number;
    
    enrollment: string;
    
    name: string;
    
    vehicleFamilyDTO: VehicleFamily;
    
    appUserDTO: AppUser;

    photoDTO: Photo;

    constructor() {
        this.vehicleFamilyDTO = new VehicleFamily();
        this.appUserDTO = new AppUser();
        this.photoDTO = new Photo();
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getPhotoDTO(): Photo {
        return this.photoDTO;
    }

}