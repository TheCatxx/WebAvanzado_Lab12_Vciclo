import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

// Rutas
import { APP_ROUTING } from './app.routes'
// Servicios
import { ArtistsService } from './services/artists.service';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
