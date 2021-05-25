import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAlbumOneComponent } from './gallery-album-one.component';

describe('GalleryAlbumOneComponent', () => {
  let component: GalleryAlbumOneComponent;
  let fixture: ComponentFixture<GalleryAlbumOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryAlbumOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAlbumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
