import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "https://media.istockphoto.com/photos/chess-board-game-for-business-concept-in-light-and-shadow-picture-id1041114178?k=6&m=1041114178&s=612x612&w=0&h=0jC8NcPeC8m1JHXDbRCYNEHy2DV385wa6_da7XrGea8="},
    {img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Checkmate2.jpg"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/777777"}
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
