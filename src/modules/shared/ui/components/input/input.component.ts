import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dle-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() value!: number | string;
  @Input() disabled = false;
  @Input() type: 'text' | 'number' = 'text';
  @Input() placeholder: string = '';
  onChange = (value: any) => {};
  onTouch = () => {};

  onInput(event: any) {
    this.writeValue(event.target.value);
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: number | string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
