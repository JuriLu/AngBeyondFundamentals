import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponent} from "./components/test/test.component";

import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {HomeComponent} from "./shared/home/home.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {NotAuthorizedComponent} from "./shared/not-authorized/not-authorized.component";
import {LoaderComponent} from "./shared/loader/loader.component";
import {ModalComponent} from "./shared/modal/modal.component";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    LoaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
