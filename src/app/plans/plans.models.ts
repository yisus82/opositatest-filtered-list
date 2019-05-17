export interface Plans {
  plansInfo: PlanInfo[];
  categoriesSelected: string[];
  scopesSelected: string[];
  academicTitleSelected: string;
  minSalary: number;
  maxSalary: number;
}

export interface PlanInfo {
  name: string;
  categories: string[];
  scope: string;
  academicTitle: string;
  salary: number;
}
