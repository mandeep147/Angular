import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'nameLabel'
})
export class NameLabelPipe implements PipeTransform{
  transform(value: String, prefix: String): String {
    return prefix + '' + value;
  }
}
