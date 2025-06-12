import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(tasks: any[], status: string): any[] {
    if (!tasks || !status || status === 'All') {
      return tasks;
    }

    const searchStatus = status.toLowerCase();
    return tasks.filter(task =>
      task.status.toLowerCase() === searchStatus
    );
  }
}
