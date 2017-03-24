/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

@Component({
    selector: 'market-daysell',
    styleUrls: ['market-daysell.component.css'],
    templateUrl: 'market-daysell.component.html'

})
export class MarketDaySell implements OnInit{

    constructor(
      private http: Http,
      private router: Router
    ){}

    ngOnInit() {
      this.getMarket();
  }

    getMarket(): void{
      
    }
    navToDaySell(): void{
      this.router.navigate(['/MarketDaySell']);
    }

}
