import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    onHover();
  }
}

function onHover(){
var rotation;
  $( ".well" ).hover(
    function(){
      $(this).css({ 'opacity' : 0.5 });
    }, function(){
      $(this).css({ 'opacity' : 1 });
      
    }
  )
}
