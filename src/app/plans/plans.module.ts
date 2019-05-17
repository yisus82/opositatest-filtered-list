import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './components/plans/plans.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { PlanListItemComponent } from './components/plan-list-item/plan-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { PlansRoutingModule } from './plans-routing.module';
import { NgxsModule } from '@ngxs/store';
import { PlansState } from './store/plans.state';

@NgModule({
  declarations: [PlansComponent, PlanListComponent, PlanListItemComponent],
  imports: [CommonModule, PlansRoutingModule, SharedModule, NgxsModule.forFeature([PlansState])]
})
export class PlansModule {}
