
import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-short-profile',
  template: '<div><p>{{ profile }}</p></div>'
})
export class ShortProfileComponent {
  @Input() profile;
}
