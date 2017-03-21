import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { LoginForm } from "./pages/login/app.component.login";
import { Layout }  from "./pages/main/layout.component";
import { Market } from "./pages/MarketSubject/market.component";
import { Linechart } from "./pages/Charts/linechart.component";
import { Columnchart } from "./pages/Charts/columnchart.component";
import { Piechart } from "./pages/Charts/piechart.component"
import { Barchart } from "./pages/Charts/barchart.component"
import {MarketSituationSumModal} from "./pages/MarketSubject/modals/marketsituationsum.component";
import {DxTemplateModule, DxDataGridModule} from "devextreme-angular";
import {Grid} from './pages/Grids/grid.component'





declare function require(arg:string): any;

const Highcharts = require('highcharts/highcharts.src');
const appChildRoutes: Routes = [
  { path:"Marketing", component: Market },
  { path:"Costing", component: Linechart },
  { path:"Tendering", component: Barchart },
  { path:"**", redirectTo: "Marketing"}
]

const appRoutes: Routes = [
  { path:"", component: Market },
  { path:"Marketing", component: Market },
  { path:"Costing", component: Linechart },
  { path:"Tendering", component: Barchart },
  { path:"**", redirectTo: "Marketing"}
]

@NgModule({
  declarations: [
    AppComponent,
    Layout,
    Market,
    Columnchart,
    Linechart,
    Piechart,
    Barchart,
    MarketSituationSumModal,
    Grid,
    LoginForm
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    DxDataGridModule,
    DxTemplateModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
