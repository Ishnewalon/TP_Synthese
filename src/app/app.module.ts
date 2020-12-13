import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulairesComponent } from './theorie/formulaires/formulaires.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CreateComponent } from './application/crud/create/create.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReadOneComponent } from './application/crud/read-one/read-one.component';
import { YoutubeComponent } from './application/youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormulaireComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    ContactComponent,
    Error404Component,
    TutorielsComponent,
    ReadOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
