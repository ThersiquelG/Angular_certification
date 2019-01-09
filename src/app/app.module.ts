import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCharactersComponent } from './show-characters/show-characters.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './item-list/item-list.component';
import { FormCharactersComponent } from './form-characters/form-characters.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {path: 'characters', component: ShowCharactersComponent },
  {path: 'formCharacters', component: FormCharactersComponent }
]; 


@NgModule({
  declarations: [
    AppComponent,
    ShowCharactersComponent,
    ItemListComponent,
    FormCharactersComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
