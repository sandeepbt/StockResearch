import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IEarnings } from './earnings';
import { IFinancials } from './financials';

@Injectable()
export class DashboardService {
    private _earningssUrl = 'https://api.iextrading.com/1.0/stock/aapl/earnings';
    private _financialssUrl = 'https://api.iextrading.com/1.0/stock/aapl/financials';

    constructor(private _http: HttpClient) { }

    getEarnings(): Observable<IEarnings[]> {
        return this._http.get<IEarnings[]>(this._earningssUrl)
            .catch(this.handleError);
    }

    getFinancials(): Observable<IFinancials[]> {
        return this._http.get<IFinancials[]>(this._financialssUrl)
            .catch(this.handleError);
    }    

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}