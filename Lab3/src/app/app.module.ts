import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './components/new/new.component';
import { PeopleComponent } from './components/people/people.component';
import { DefaultComponent } from './components/default/default.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { AddressesComponent } from './components/addresses/addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    PeopleComponent,
    DefaultComponent,
    PersonFormComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
