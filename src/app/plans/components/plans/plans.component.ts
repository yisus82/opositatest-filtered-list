import { Component, OnInit } from '@angular/core';
import { PlanInfo } from '../../plans.models';
import { Select, Store } from '@ngxs/store';
import { PlansState } from '../../store/plans.state';
import { Observable } from 'rxjs';
import { GetPlans } from '../../store/plans.actions';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  @Select(PlansState.getPlans) plansInfo$: Observable<PlanInfo[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetPlans());
  }
}
