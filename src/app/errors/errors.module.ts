import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './component/error/error.component';
import { NgxsModule } from '@ngxs/store';
import { ErrorState } from './store/error.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, FontAwesomeModule, NgxsModule.forFeature([ErrorState])],
  exports: [ErrorComponent]
})
export class ErrorsModule {}
