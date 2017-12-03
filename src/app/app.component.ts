import { Component } from '@angular/core';

import { DashboardService } from './dashboard/dashboard.service';

@Component({
  selector: 'sra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DashboardService]
})
export class AppComponent {
  title = 'Stock Research';
}
