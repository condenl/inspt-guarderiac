import { AppUser } from "./app-user";
import { Vehicle } from "./vehicle";
import { Zone } from "./zone";

export class Garage {

    id: number;

    stateCounter: number;

    maintenanceService: boolean;

    kWHConsumed: number;

    vehicleDTO: Vehicle;

    vehicleAssignationDate: Date;

    acquireDate: Date;

    appUserDTO: AppUser;

    zoneDTO: Zone;

    constructor() {
        this.vehicleDTO = new Vehicle();
        this.appUserDTO = new AppUser();
        this.zoneDTO = new Zone();
    }

    get getId(): number {
        return this.id;
    }

    set setId(id: number) {
         this.id = id;
    }

    get getAppUserDTO(): AppUser {
        return this.appUserDTO;
    }

    get getVehicleDTO(): Vehicle {
        return this.vehicleDTO;
    }

    set setVehicleDTO(vehicleDTO: Vehicle) {
        this.vehicleDTO = vehicleDTO;
    }

    get getZoneDTO(): Zone {
        return this.zoneDTO;
    }

}