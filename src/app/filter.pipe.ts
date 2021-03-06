import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.title.indexOf(filter.trim()) !== -1);
  }

}
