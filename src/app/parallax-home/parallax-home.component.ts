import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-home',
  templateUrl: './parallax-home.component.html',
  styleUrls: ['./parallax-home.component.css'],
  
})
export class ParallaxHomeComponent implements OnInit {

  
  @Input() public backgroundUrl: string;
  @Input() public title : string;
  
  constructor() { }

  ngOnInit() {
  }

}
