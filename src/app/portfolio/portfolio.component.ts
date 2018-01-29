import { Component, OnInit } from '@angular/core';
declare var $: any;
var weddingImages = new Array ('../assets/weddings/wed4.jpg', '../assets/weddings/wed2.jpg', '../assets/weddings/wed5.jpg');
var index = 1;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
