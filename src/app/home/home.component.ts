import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'countUp Demo';
  options = {
    useEasing: false,
    duration: 25
  }

  update() {
    console.log('update', );
    
  }

  constructor() { }
  
  ngOnInit(): void {
    
  }
 
}
