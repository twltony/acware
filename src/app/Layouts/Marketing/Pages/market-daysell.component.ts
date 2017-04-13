/**
 * Created by Tony on 2017/3/8.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http'
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MarketingService } from '../marketing.services'


@Component({
  selector: 'market-daysell',
  styleUrls: ['market-daysell.component.css'],
  templateUrl: 'market-daysell.component.html'

})
export class MarketDaySell implements OnInit {
  datas: Object;
  constructor(
    private _Location: Location,
    private http: Http,
    private router: Router,
    private marketingService: MarketingService
  ) {

  }

  ngOnInit() {
    this.getMarket();
  }

  getMarket(): void {
    this.marketingService.getYearMarketData()
      .then(datas => {
        this.datas = datas;
      })
  }
  navGoBack(): void {
    this._Location.back();
  }


}
