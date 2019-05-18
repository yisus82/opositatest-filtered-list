import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/filters/filters.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, Ng5SliderModule],
  exports: [FiltersComponent]
})
export class SharedModule {}
