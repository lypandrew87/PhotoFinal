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

  ngOnInit() {



   

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01") as HTMLInputElement;
var captionText = document.getElementById("caption");

$( document ).ready(function() {
  $(".well").click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
});  });

modal.onclick = function() {
  modal.style.display = "none";
 }

  }}




