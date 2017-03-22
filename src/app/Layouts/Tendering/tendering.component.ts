/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { Http } from '@angular/http'

@Component({
    selector: 'tendering-subject',
    styles:['.ac-breakline {line-height: 2px;background-color: #747474;margin: 5px;}th {font-size:16px} :host(ac-marketsubject) {overflow-y: scroll; overflow-x: hidden;}'],
    templateUrl: 'tendering.component.html'
})
export class Tendering implements OnInit{
  public datas = [];
    constructor(public http: Http){
      this.http.get('assets/data/marketing.json')
      //.subscribe(res => console.log(res.json()));
        .subscribe(res => this.datas = res.json());
    }

    ngOnInit() {
  }

  createModalMarketSum(){
    //this.MarketSumModal.showModal();
  }



}