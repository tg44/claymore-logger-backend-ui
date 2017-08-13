import { Component, OnInit } from '@angular/core';

import { MetricsService } from './metrics.service';

@Component({
  selector: 'metrics',
  templateUrl: './metrics.html',
})

export class Metrics implements OnInit {

    data: any;

    constructor(private metricsService: MetricsService) {
    }
    ngOnInit() {
        this.data = this.metricsService.getAll();
        this.metricsService.test();
        this.metricsService.test2();
    }
}
