import {  Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Marketing } from './Layouts/Marketing/marketing.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent implements OnInit{
   // title = 'app works!';
  hasSubNavbar= false;
  
   constructor(){
    
   }

   isHasSubNavbar(location: Location){
     let loca = location.path();
        console.log(loca.indexOf("Marketing"));
          if(loca.indexOf("Marketing")>0){  
            this.hasSubNavbar = true;
            console.log(this.hasSubNavbar);
          }
   }
   ngOnInit(){
   
   }

 }


