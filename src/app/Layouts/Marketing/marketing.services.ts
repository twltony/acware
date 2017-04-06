import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { MarketingDatas } from '../../Modals/marketing'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketingService {
    private url = 'http://172.22.31.36:8080/salesplan/getMonthSalesplanByYear';
    private handleError(error:any): Promise<any>{
        console.error("MarketingService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }
    

    getMarketingMainData(): Promise<MarketingDatas[]>{
        return this.http.get(this.url)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }

    getSalesStatusData():  Promise<MarketingDatas[]>{
        return this.http.get(this.url)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }

}