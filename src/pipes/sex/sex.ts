import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex',
})
export class SexPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    SEX_MAP = {
        '1': '男',
        '2': '女'
    };

    transform(value: string, ...args) {
        return this.SEX_MAP[value] || "保密" ;
    }
}
