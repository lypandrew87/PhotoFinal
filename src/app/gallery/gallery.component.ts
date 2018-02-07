import { Component, OnInit } from '@angular/core';

declare var $: any;
var modalImg;
var modal;
var captionText;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  weddingOpen = false;
  coupleOpen = false;
  wedColumn1 = [];
  wedColumn2 = [];
  wedColumn3 = [];

  coupleColumn1 = [];
  coupleColumn2 = [];
  coupleColumn3 = [];

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
    if (this.coupleOpen == false) {
      this.openCouple();

      if (this.weddingOpen == true) {
        this.closeWedding();
      }
    } else {
      this.closeCouple();
    }
  }

  displayWedding() {
    if (this.weddingOpen == false) {
      this.openWedding();
      if (this.coupleOpen == true) {
        this.closeCouple();
      }
    } else {
      this.closeWedding();
    }
  }
  //#region Helper Methods
  openCouple() {
    this.coupleColumn1 = ['1', '2', '3'];
    this.coupleColumn2 = ['4', '5', '6'];
    this.coupleColumn3 = ['7', '8', '9'];
    this.coupleOpen = true;
  }

  closeCouple() {
    this.coupleColumn1 = [];
    this.coupleColumn2 = [];
    this.coupleColumn3 = [];
    this.coupleOpen = false;
  }
  openWedding() {
    this.wedColumn1 = ['1', '2', '3', '4', '5'];
    this.wedColumn2 = ['6', '7', '8', '9'];
    this.wedColumn3 = ['10', '12', '13', '14'];
    this.weddingOpen = true;
  }
  closeWedding() {
    this.wedColumn1 = [];
    this.wedColumn2 = [];
    this.wedColumn3 = [];
    this.weddingOpen = false;
  }
  //#endregion
}
