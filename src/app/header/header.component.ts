import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;  
  // isCollapsed = false;
  constructor(private titlePage:Title){}
  ngOnInit(){}
    pageTitle(title:string){
    this.titlePage.setTitle(title);
    }
    // toggleNavbar() {
    //   this.isCollapsed = !this.isCollapsed;
    // } 
    }