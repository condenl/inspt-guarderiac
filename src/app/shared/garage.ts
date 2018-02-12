import { AppUser } from "./app-user";
import { Vehicle } from "./vehicle";
import { Zone } from "./zone";

export class Garage {

    private id: number;

    private stateCounter: number;

    private maintenanceService: boolean;

    private kWHConsumed: number;

    private vehicleDTO: Vehicle;

    private vehicleAssignationDate: Date;

    private acquireDate: Date;

    private appUserDTO: AppUser;

    private zoneDTO: Zone;

    constructor() {
        this.vehicleDTO = new Vehicle();
        this.appUserDTO = new AppUser();
        this.zoneDTO = new Zone();
    }

    set setId(id: number) {
         this.id = id;
    }

    get getAppUserDTO(): AppUser {
        return this.appUserDTO;
    }

}