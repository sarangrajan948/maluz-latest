import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [

{path:'details', component:FooterComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'team', component:TeamComponent},
{path:'movies', component:MoviesComponent},
{path:'gallery', component:GalleryComponent},
{path:'career', component:CareerComponent},
{path:'updates', component:UpdatesComponent},
{path:"album1",component:GalleryAlbumOneComponent},
{path:"album2",component:GalleryAlbumTwoComponent},
{path:"early",component:EarlylifeComponent},
{path:'**', component:HomeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
