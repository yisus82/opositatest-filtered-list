import { Component, OnInit, Input } from '@angular/core';
import { PlanInfo } from '../../plans.models';

@Component({
  selector: 'app-plan-list-item',
  templateUrl: './plan-list-item.component.html',
  styleUrls: ['./plan-list-item.component.scss']
})
export class PlanListItemComponent implements OnInit {
  @Input() plan: PlanInfo;

  constructor() {}

  ngOnInit() {}
}
