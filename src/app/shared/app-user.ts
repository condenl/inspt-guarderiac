export class AppUser {
    
    id: number;
    
    name: string;
    
    address: string;
    
    document: string;
    
    phone: number;
    
    entryDate: Date;
    
    username: string;

    password: string;

    constructor() { }

    get getName(): string {
        return this.name;
    }

    get getUsername(): string {
        return this.username;
    }

    set setId(id: number) {
        this.id = id;
    }

}