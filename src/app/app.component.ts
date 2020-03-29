import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = "Mandeep";
  items = [
    'https://cdn.pixabay.com/photo/2018/10/17/11/04/dog-3753706_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/30/23/26/baby-alaskan-malamute-2358585_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/06/29/10/35/malamute-3505726_1280.jpg'
  ];
}
