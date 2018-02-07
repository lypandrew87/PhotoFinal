import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate, transition, keyframes} from '@angular/animations';

declare var $: any;
var modalImg;
var modal;
var captionText;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('photoAnimation', [
      
      state('visible', style({
        display:'block'
      })),
      state('invisible',   style({
        transform:'scale(1.3)',
        display:'none',
        opacity: '0'
      })),
  
      transition('visible => invisible', animate('300ms ease-out')),
      transition('invisible => visible',  animate('300ms ease-in')),
    ])
  ]
})

export class GalleryComponent {
  weddingOpen = false;
  coupleOpen = false;
  stateWed = 'invisible'; 
  stateCouple = 'invisible'; 

  wedColumn1 = ['1', '2', '3', '4', '5'];
  wedColumn2 = ['6', '7', '8', '9'];
  wedColumn3 = ['10', '12', '13', '14'];

  coupleColumn1 = ['1', '2', '3'];
  coupleColumn2 = ['4', '5', '6'];
  coupleColumn3 = ['7', '8', '9'];

  ngOnInit() {

    modal = document.getElementById('myModal');

    var img = document.getElementById('myImg');
    modalImg = document.getElementById("img01") as HTMLInputElement;
    captionText = document.getElementById("caption");

    modal.onclick = function () {
      modal.style.display = "none";
    }
  }

  enlarge(target) {
    modal.style.display = "block";
    modalImg.src = target.src;
    modalImg.alt = target.alt;
    captionText.innerHTML = target.alt;
  }

  displayCouple() {
    this.stateCouple = (this.stateCouple == 'invisible' ? 'visible': 'invisible');
   }

  displayWedding() {
    this.stateWed = (this.stateWed == 'invisible' ? 'visible': 'invisible');
  }
}
