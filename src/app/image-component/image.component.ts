import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-image',
  template: '<div class="thumbnail"><img src="{{imageUrl}}"/></div>',
  styles: [
    `.thumbnail {
      width: 100px;
      height: 100px;
    }
    img {
      height: 100%;
      width: auto;
    }`
  ]
})
export class ImageComponent {
  @Input() imageUrl;
}
