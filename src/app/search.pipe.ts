import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(students, list) {
    if (list === undefined) {
      return students;
    }
    else {
      return students.filter(
        function (x) {
          return x.name.toLowerCase().startsWith(list.toLowerCase());
        }
      )
    }
  }

}
