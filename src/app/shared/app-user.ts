export class AppUser {
    
    private id: number;
    
    private name: string;
    
    private address: string;
    
    private document: string;
    
    private phone: number;
    
    private entryDate: Date;
    
    private username: string;

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