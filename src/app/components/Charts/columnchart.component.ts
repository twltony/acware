/**
 * Created by Tony on 2017/3/8.
 * 条形图控件
 */
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'columnchart',
  template: `
        <div>
        <div #columnchart style=""></div>
        </div>
      `
})

export class Columnchart implements AfterViewInit, OnDestroy {
  @ViewChild('columnchart') public chartEl: ElementRef;

  constructor(private elRef: ElementRef){

  }

  ngOnInit() {
    console.log(this.elRef.nativeElement.parentElement.clientWidth);
  }

  private _chart: any;

  public ngAfterViewInit() {
    let opts: any = {
      title: {
        text: '营销情况',
        x: -20 //center
      },
      xAxis: {
        categories: ['01月', '02月', '03月', '04月', '05月', '06月',
          '07月', '08月', '09月', '10月', '11月', '12月']
      },
      yAxis: {
        min: 0,
        title: {
            text: '金额（亿元）'
        }
      },
      plotOptions: {
        column: {
          dataLabels: {enabled: true},
          pointWidth: 15
        }
      },
      series: [
        {
          name: '计划金额',
          data: [
            7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6
          ]
        },{
          name: '销售金额',
          data: [
            3.0, 3.9, 10.5, 20.5, 15.2, 31.5, 28.2,
            25.5, 20.3, 15.3, 23.9, 19.6
          ]
        },
      ],
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'column',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
