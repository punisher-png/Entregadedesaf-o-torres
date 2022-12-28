import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  templateUrl: './car3.component.html',
  styleUrls: ['./car3.component.scss'],
  selector: 'app-car3'
})
export class Car3Component {
  constructor(public trafficLightService: TrafficLightService) {}
}
