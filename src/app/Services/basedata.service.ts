import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import { BaseDataBean } from '../Modals/basedata.bean'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseDataService {
    private basedataUrl = 'api/basedatas';
    private headers = new Headers({'Content-Type': 'application/json'});
    private handleError(error:any): Promise<any>{
        console.error("BasedataService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){}

    getBaseData(): Promise<BaseDataBean[]>{
        return this.http.get(this.basedataUrl)
                    .toPromise()
                    .then(response => response.json().data as BaseDataBean[])
                    .catch(this.handleError);
    }
    

}