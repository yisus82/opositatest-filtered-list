import { Component, OnInit, Input } from '@angular/core';
import { PlanInfo } from '../../plans.models';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  @Input() plans: PlanInfo[];

  constructor() {}

  ngOnInit() {}
}
