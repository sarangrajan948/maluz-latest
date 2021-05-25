import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

albumone(){
  this.route.navigate(['album1']);
}
albumtwo(){
  this.route.navigate(['album2']);
}

}
