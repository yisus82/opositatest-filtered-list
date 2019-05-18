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
  constructor(public categories: string[]) {}
}

export class ScopesSelectedChanged {
  static type = '[Plans] ScopesSelectedChanged';
  constructor(public scopes: string[]) {}
}

export class AcademicTitleSelectedChanged {
  static type = '[Plans] AcademicTitleSelectedChanged';
  constructor(public academicTitle: string) {}
}

export class SalarySelectedChanged {
  static type = '[Plans] SalarySelectedChanged';
  constructor(public value: number, public highValue: number) {}
}
