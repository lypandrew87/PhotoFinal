import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-parallax-home',
  templateUrl: './parallax-home.component.html',
  styleUrls: ['./parallax-home.component.css'],

})
export class ParallaxHomeComponent implements OnInit {
  @Input() public backgroundUrl: string;
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
    //Static images on smaller mobile screens that do not support fixed backgrounds
    $(document).ready(function () {
      if ($(window).width() < 460) {
        $(".body").css('background-attachment', 'scroll');
      }
    });
  }
}
