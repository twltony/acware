import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Marketing } from './Layouts/Marketing/marketing.component'
import { BaseDataBean } from './Modals/basedata.bean'
import { BaseDataService  } from './Services/basedata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BaseDataService]
})

export class AppComponent implements OnInit {
  basedatas : BaseDataBean[];
  hasSubNavbar = false;
  location: Location;
  selectedYear;

  constructor(
    location: Location,
    private baseDataService: BaseDataService
    ) {
      this.location = location;
       this.baseDataService.getBaseData()
        .then(basedatas => {
          this.basedatas = basedatas;
      })
    }
  

  ngOnInit() {
  }
 


}