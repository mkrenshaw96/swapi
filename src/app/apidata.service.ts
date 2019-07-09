import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class ApiData {
    logApiData(data: object) {
        console.log(data);
    }

    public type = new BehaviorSubject<any>('');
    cast = this.type.asObservable();
    setType(newType: any) {
        this.type.next(newType)
    }

    public response = new BehaviorSubject<any>('');
    cast2 = this.response.asObservable();
    setResponse(newResponse: any) {
        this.response.next(newResponse)
    }
}