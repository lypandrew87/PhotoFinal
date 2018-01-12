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
    rotateBackgroundImage();

    //
  }
}

function rotateBackgroundImage(){

  var images = [
    "../assets/header-background1.jpg",
    "../assets/header-background2.jpg",
    "../assets/header-background3.jpg",
    "../assets/header-background4.jpg",
    "../assets/header-background5.jpg",
    "../assets/header-background6.jpg",
    "../assets/header-background7.jpg",
    "../assets/header-background8.jpg",
    "../assets/header-background9.jpg",
    "../assets/header-background10.jpg",
    "../assets/header-background11.jpg",
    "../assets/header-background12.jpg"
  ]

  var imageHead = document.getElementById("id");
  
  const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `url(${image})` 
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(images, imageHead, 9000);
}


function parallaxIcon() {
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    $('.image').css({
      'transform': 'translate(0px, -' + wScroll / 100 + '%)'
    });
  });

}
