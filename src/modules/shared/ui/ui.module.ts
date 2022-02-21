import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './components/chip/chip.component';
import { HoursMinutesPipe } from './pipes/hours-minutes.pipe';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChipComponent,
    HoursMinutesPipe,
    FloatingActionButtonComponent,
    ButtonComponent,
    InputComponent,
  ],
  exports: [
    ChipComponent,
    FloatingActionButtonComponent,
    ButtonComponent,
    HoursMinutesPipe,
    InputComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UiModule {}
