import { Component, OnInit } from '@angular/core';
import { Options, LabelType, ChangeContext } from 'ng5-slider';
import { Store } from '@ngxs/store';
import {
  SalarySelectedChanged,
  CategoriesSelectedChanged,
  ScopesSelectedChanged,
  AcademicTitleSelectedChanged
} from 'src/app/plans/store/plans.actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  categories = [
    { name: 'Category 1', selected: false },
    { name: 'Category 2', selected: false },
    { name: 'Category 3', selected: false },
    { name: 'Category 4', selected: false },
    { name: 'Category 5', selected: false }
  ];
  scopes = [
    { name: 'Scope 1', selected: false },
    { name: 'Scope 2', selected: false },
    { name: 'Scope 3', selected: false }
  ];
  academicTitles = [
    { name: 'Academic Title 1', selected: false },
    { name: 'Academic Title 2', selected: true }
  ];
  minSalary = 0;
  maxSalary = 10000;
  value = this.minSalary;
  highValue = this.maxSalary;
  options: Options = {
    floor: this.minSalary,
    ceil: this.maxSalary,
    step: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min:</b> ' + value + ' €';
        case LabelType.High:
          return '<b>Max:</b> ' + value + ' €';
        default:
          return value + ' €';
      }
    }
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      new AcademicTitleSelectedChanged(
        this.academicTitles.find(academicTitle => academicTitle.selected).name
      )
    );
  }

  categoriesSelectedChanged(event$) {
    this.categories = this.categories.map(category =>
      category.name === event$.target.id ? { ...category, selected: !category.selected } : category
    );
    this.store.dispatch(
      new CategoriesSelectedChanged(
        this.categories.filter(category => category.selected).map(category => category.name)
      )
    );
  }

  scopesSelectedChanged(event$) {
    this.scopes = this.scopes.map(scope =>
      scope.name === event$.target.id ? { ...scope, selected: !scope.selected } : scope
    );
    this.store.dispatch(
      new ScopesSelectedChanged(
        this.scopes.filter(scope => scope.selected).map(scope => scope.name)
      )
    );
  }

  academicTitleSelectedChanged(event$) {
    this.academicTitles = this.academicTitles.map(academicTitle =>
      academicTitle.name === event$.target.id
        ? { ...academicTitle, selected: true }
        : { ...academicTitle, selected: false }
    );
    this.store.dispatch(
      new AcademicTitleSelectedChanged(
        this.academicTitles.find(academicTitle => academicTitle.selected).name
      )
    );
  }

  salarySelectedChanged(changeContext: ChangeContext) {
    this.store.dispatch(new SalarySelectedChanged(changeContext.value, changeContext.highValue));
  }
}
