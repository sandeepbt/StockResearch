import { Component, OnInit } from '@angular/core';

import { IEarnings } from './earnings';
import { IFinancials } from './financials';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'sra-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    earningsrows = [];
    earningsColumns = [
      { prop: 'actualEPS' },
      { prop: 'consensusEPS' },
      { prop: 'estimatedEPS' },
      { name: 'announceTime' },
      { name: 'numberOfEstimates' },
      { prop: 'EPSSurpriseDollar' },
      { prop: 'EPSReportDate' },
      { name: 'fiscalPeriod' },
      { name: 'fiscalEndDate' }
    ];

    financialsrows = [];
    financialsColumns = [
      { prop: 'reportDate' },
      { prop: 'grossProfit' },
      { prop: 'costOfRevenue' },
      { name: 'operatingRevenue' },
      { name: 'operatingIncome' },
      { prop: 'netIncome' },
      { prop: 'researchAndDevelopment' },
      { name: 'operatingExpense' },
      { name: 'currentAssets' },
      { name: 'totalAssets' },
      { name: 'totalLiabilities' },
      { name: 'currentCash' },
      { name: 'currentDebt' },
      { name: 'totalCash' },
      { name: 'totalDebt' },
      { name: 'shareholderEquity' },
      { name: 'cashChange' },
      { name: 'cashFlow' },
      { name: 'operatingGainsLosses' }
    ];

    earnings: IEarnings[] = [];
    financials: IFinancials[] = [];
    errorMessage: string;

    constructor(private _dashboardService: DashboardService) { }

    ngOnInit(): void {

      this._dashboardService.getEarnings()
        .subscribe(x => {
          this.earnings = x['earnings'];
          this.earningsrows = this.earnings;
        },
        error => this.errorMessage = <any>error);

      this._dashboardService.getFinancials()
        .subscribe(x => {
          this.financials = x['financials'];
          this.financialsrows = this.financials;
        },
        error => this.errorMessage = <any>error);

    }

  }
