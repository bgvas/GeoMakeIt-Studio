import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscores'
})
export class RemoveUnderscoresPipe implements PipeTransform {

  transform(word: string): string {
    return word.replace(/_/g, ' ');
  }

}
