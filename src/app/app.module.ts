import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import { EarlylifeComponent } from './earlylife/earlylife.component';
import { UpdatesComponent } from './updates/updates.component';
import { GalleryAlbumOneComponent } from './gallery-album-one/gallery-album-one.component';
import { GalleryAlbumTwoComponent } from './gallery-album-two/gallery-album-two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    GalleryComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent,
    AwardsComponent,
    HeaderComponent,
    CareerComponent,
    EarlylifeComponent,
    UpdatesComponent,
    GalleryAlbumOneComponent,
    GalleryAlbumTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
