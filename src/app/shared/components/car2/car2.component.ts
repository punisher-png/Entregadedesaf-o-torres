import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.scss'],
  selector: 'app-car2'
})
export class Car2Component {
  constructor(public trafficLightService: TrafficLightService) {}
}
