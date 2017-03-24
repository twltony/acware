/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDataBean } from '../../Modals/basedata.bean'
import { BaseDataService  } from '../../Services/basedata.service'


@Component({
    selector: 'marketing-subject',
    styleUrls:['./marketing.component.css'],
    templateUrl: 'marketing.component.html',
    providers:[]

})
export class Marketing implements OnInit{
 basedatas : BaseDataBean[];
 selectedYear;

    constructor(
      private router: Router,
      private baseDataService: BaseDataService
    ) {
       this.baseDataService.getBaseData()
        .then(basedatas => {
          this.basedatas = basedatas;
      })
    }

    ngOnInit() {
      this.getMarket();
   }

    getMarket(): void{
      
    }
    navToDaySell(): void{
      this.router.navigate(['/MarketDaySell']);
    }
     onSelectYear(year): void {
      this.selectedYear=year;
      console.log(year);
    } 

}
