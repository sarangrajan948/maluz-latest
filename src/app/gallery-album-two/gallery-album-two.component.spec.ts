import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAlbumTwoComponent } from './gallery-album-two.component';

describe('GalleryAlbumTwoComponent', () => {
  let component: GalleryAlbumTwoComponent;
  let fixture: ComponentFixture<GalleryAlbumTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAlbumTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAlbumTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
