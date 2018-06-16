import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate, transition, keyframes} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


declare var $: any;
var modalImg;
var modal;
var captionText;

interface PhotoUrl {
  Url: string;
  Category : string;
}

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

  constructor(private http: HttpClient){
  }

  coupleUrls : String[] = [];
  weddingUrls : String[] = [];

  coupleOpen = false;
  stateWed = 'invisible'; 
  stateCouple = 'invisible'; 

  ngOnInit() {


    //get couple Urls
    this.http.get('http://localhost:20951/PhotoUrl/couple').subscribe(data => {

    console.log(data); 
    let d : PhotoUrl;
    
    for(var i = 0; i<data.PhotoUrl.length; i++){
      console.log(data.PhotoUrl[i].Url); 
      this.coupleUrls.push(data.PhotoUrl[i].Url);
    } 
  });

  //get wedding Urls
  this.http.get('http://localhost:20951/PhotoUrl/wedding').subscribe(data => {
    
        console.log(data); 
        let d : PhotoUrl;
        
        for(var i = 0; i<data.PhotoUrl.length; i++){
          console.log(data.PhotoUrl[i].Url); 
          this.weddingUrls.push(data.PhotoUrl[i].Url);
        } 
      });

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
    this.stateWed = 'invisible'; 
   }

  displayWedding() {
    this.stateWed = (this.stateWed == 'invisible' ? 'visible': 'invisible');
    this.stateCouple = 'invisible'; 
  }
}
