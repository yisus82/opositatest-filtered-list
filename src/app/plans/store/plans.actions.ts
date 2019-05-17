import { PlanInfo } from '../plans.models';

export class GetPlans {
  static readonly type = '[Plans] GetPlans';
}

export class GetPlansSuccess {
  static readonly type = '[Plans] GetPlansSuccess';
  constructor(public plansInfo: PlanInfo[]) {}
}

export class GetPlansFailed {
  static type = '[Plans] GetPlansFailed';
  constructor(public error: Error) {}
}

export class CategoriesSelectedChanged {
  static type = '[Plans] CategoriesSelectedChanged';
}

export class ScopeSelectedChanged {
  static type = '[Plans] ScopeSelectedChanged';
}

export class AcademicTitleSelectedChanged {
  static type = '[Plans] AcademicTitleSelectedChanged';
}

export class SalarySelectedChanged {
  static type = '[Plans] SalarySelectedChanged';
}
