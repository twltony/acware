/**
 * Created by Tony on 2017/3/8.
 * 饼图控件
 */
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import 'highcharts/adapters/standalone-framework.src';

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');

@Component({
  selector: 'piechart',
  template: `
        <div>
        <div #piechart></div>
        </div>
      `
})

export class Piechart implements AfterViewInit, OnDestroy {
  @ViewChild('piechart') public chartEl: ElementRef;

  private _chart: any;

  public ngAfterViewInit() {
    let opts: any = {
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: '平方m²',
            colorByPoint: true,
            data: [{
                name: '别墅',
                y: 56.33
            }, {
                name: '车位',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: '洋房',
                y: 10.38
            }, {
                name: '公寓',
                y: 4.77
            }, {
                name: '商铺',
                y: 0.91
            }]
        }],
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'pie',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
