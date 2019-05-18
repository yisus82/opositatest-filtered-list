import { Action, State, Store, Selector, StateContext } from '@ngxs/store';
import { Plans, PlanInfo } from '../plans.models';
import {
  GetPlans,
  GetPlansSuccess,
  GetPlansFailed,
  CategoriesSelectedChanged,
  ScopesSelectedChanged,
  AcademicTitleSelectedChanged,
  SalarySelectedChanged
} from './plans.actions';
import { tap, catchError } from 'rxjs/operators';
import { SetError } from 'src/app/errors/store/error.actions';
import { PlansService } from '../services/plans.service';

@State<Plans>({
  name: 'plans',
  defaults: {
    plansInfo: [],
    categoriesSelected: [],
    scopesSelected: [],
    academicTitleSelected: '',
    minSalary: 0,
    maxSalary: 100000
  }
})
export class PlansState {
  constructor(private store: Store, private plansService: PlansService) {}

  @Selector()
  static getPlans({
    plansInfo,
    academicTitleSelected,
    categoriesSelected,
    scopesSelected,
    minSalary,
    maxSalary
  }: Plans) {
    let plans = plansInfo;
    plans = plans.filter(plan => plan.salary >= minSalary && plan.salary <= maxSalary);
    plans = plans.filter(plan => plan.academicTitle === academicTitleSelected);
    if (categoriesSelected.length > 0) {
      plans = plans.filter(
        plan => plan.categories.filter(category => categoriesSelected.includes(category)).length > 0
      );
    }
    if (scopesSelected.length > 0) {
      plans = plans.filter(plan => scopesSelected.includes(plan.scope));
    }
    return plans;
  }

  @Action(GetPlans)
  getPlans({ dispatch }: StateContext<Plans>) {
    try {
      dispatch(new GetPlansSuccess(this.plansService.getPlans()));
    } catch (error) {
      dispatch(new GetPlansFailed(error));
    }
  }

  @Action(GetPlansSuccess)
  getPlansSuccess({ patchState }: StateContext<Plans>, plansInfo: GetPlansSuccess) {
    patchState({ ...plansInfo });
  }

  @Action(CategoriesSelectedChanged)
  categoriesSelectedChanged(
    { patchState }: StateContext<Plans>,
    { categories }: CategoriesSelectedChanged
  ) {
    patchState({ categoriesSelected: categories });
  }

  @Action(ScopesSelectedChanged)
  scopesSelectedChanged({ patchState }: StateContext<Plans>, { scopes }: ScopesSelectedChanged) {
    patchState({ scopesSelected: scopes });
  }

  @Action(AcademicTitleSelectedChanged)
  academicTitleSelectedChanged(
    { patchState }: StateContext<Plans>,
    { academicTitle }: AcademicTitleSelectedChanged
  ) {
    patchState({ academicTitleSelected: academicTitle });
  }

  @Action(SalarySelectedChanged)
  salarySelectedChanged(
    { patchState }: StateContext<Plans>,
    { value, highValue }: SalarySelectedChanged
  ) {
    patchState({ minSalary: value, maxSalary: highValue });
  }

  @Action(GetPlansFailed)
  error({ dispatch }: StateContext<Plans>, { error }: any) {
    if (error && error.message) {
      dispatch(new SetError(error));
    } else {
      dispatch(new SetError({ message: error }));
    }
  }
}
