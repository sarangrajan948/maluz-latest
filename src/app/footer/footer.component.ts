import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private titlePage:Title){}
  ngOnInit(){}
    pageTitle(title:string){
    this.titlePage.setTitle(title);
    }
  }