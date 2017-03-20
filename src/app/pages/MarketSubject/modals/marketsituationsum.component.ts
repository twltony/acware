/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ac-marketsituationsum',
  templateUrl: 'marketsituationsum.component.html'

})
export class MarketSituationSumModal implements OnInit{
  opened =false;

  ngOnInit(){}

  showModal(){
    this.opened=true;

  }
}
