/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { MarketSituationSumModal } from './modals/marketsituationsum.component'

@Component({
    selector: 'ac-marketsubject',
    styles:['.ac-breakline {line-height: 2px;background-color: #747474;margin: 5px;}th {font-size:16px}'],
    templateUrl: 'market.component.html'
})
export class Market implements OnInit{
    constructor(){
    }
    ngOnInit() {
  }

  createModalMarketSum(){
    //this.MarketSumModal.showModal();
  }



}
