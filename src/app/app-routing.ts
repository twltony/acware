import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Marketing } from "./Layouts/Marketing/marketing.component";
import { Costing } from "./Layouts/Costing/costing.component";
import { Tendering } from "./Layouts/Tendering/tendering.component";


const appRoutes: Routes = [
  { path:"", component: Marketing },
  { path:"Marketing", component: Marketing },
  { path:"Costing", component: Costing },
  { path:"Tendering", component: Tendering },
  { path:"**", redirectTo: "Marketing"}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}