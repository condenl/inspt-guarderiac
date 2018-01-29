export interface Garage {
    id: number;
    stateCounter: number;
    maintenanceService: boolean;
    kWHConsumed: number;
    vehicleId: number;
    vehicleAssignationDate: Date;
    acquireDate: Date;
    appUserId: number;
}