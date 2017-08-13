import { Routes, RouterModule } from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { Metrics } from 'app/pages/charts/metrics/metrics.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'chartist-js', component: ChartistJs },
      { path: 'metrics', component: Metrics },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
