import { Action, State, Store, Selector, StateContext } from '@ngxs/store';
import { Plans } from '../plans.models';
import { GetPlans, GetPlansSuccess, GetPlansFailed } from './plans.actions';
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
  static getPlans(plansState: Plans) {
    return plansState.plansInfo;
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

  @Action(GetPlansFailed)
  error({ dispatch }: StateContext<Plans>, { error }: any) {
    if (error && error.message) {
      dispatch(new SetError(error));
    } else {
      dispatch(new SetError({ message: error }));
    }
  }
}
