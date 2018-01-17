import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-photo-header',
  templateUrl: './photo-header.component.html',
  styleUrls: ['./photo-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhotoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    parallaxIcon();
    parallaxCarousel(); 
  }

}

function parallaxIcon() {
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.image').css({
      'transform': 'translate(0px, -' + wScroll / 100 + '%)'
    });
  });
}
function parallaxCarousel() {
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.carousel').css({
      'transform': 'translate(0px, +' + wScroll / 100 + '%)'
    });
  });
}