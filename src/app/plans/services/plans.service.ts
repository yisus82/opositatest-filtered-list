import { Injectable } from '@angular/core';
import plans from '../../../assets/plans.json';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  getPlans() {
    return plans;
  }
}
