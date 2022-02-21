import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursMinutes',
})
export class HoursMinutesPipe implements PipeTransform {
  transform(value: number): string {
    return value > 60
      ? `${(value / 60).toFixed(0)}h ${(value % 60) + 'm'}`
      : `${value}m`;
  }
}
