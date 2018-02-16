import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

export class AsideROService {

    private asideROEvent: BehaviorSubject<string> = new BehaviorSubject('');

    public destroyChildComponents(url: string): void {
        this.asideROEvent.next(url);
    }

    public getAsideRO(): Observable<string> {
        return this.asideROEvent.asObservable();
    }

}