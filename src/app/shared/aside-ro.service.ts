import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { CodeValue } from "./code-value";
import { AsideROEvent } from "./aside-ro-event.enum";

export class AsideROService {

    private asideROEvent: BehaviorSubject<CodeValue<AsideROEvent, string>> = new BehaviorSubject(null);

    public destroyChildComponents(url: string): void {
        let payload: CodeValue<AsideROEvent, string> = new CodeValue<AsideROEvent, string>(AsideROEvent.REFRESH, url);
        console.log("destory child component payload: ", payload)
        this.asideROEvent.next(payload);
    }

    public getAsideRO(): Observable<CodeValue<AsideROEvent, string>> {
        return this.asideROEvent.asObservable();
    }

    public hideRouterOutlet(): void {
        this.asideROEvent.next(new CodeValue<AsideROEvent, string>(AsideROEvent.TAKE_OFF, ""));
    }

}