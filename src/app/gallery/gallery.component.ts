import { Component, OnInit } from '@angular/core';

declare var $: any;
let  numbers = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  column1 = ['1', '2','3','4','5'];
  column2 = ['6', '7','8','9'];
  column3 = ['10','12','13','14'];

}
