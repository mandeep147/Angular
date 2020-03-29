import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-image',
  template: '<div class="thumbnail"><img src="{{imageUrl}}"/></div>',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() imageUrl;
}
