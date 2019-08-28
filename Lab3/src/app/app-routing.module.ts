import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { PeopleComponent } from './components/people/people.component';
import { DefaultComponent } from './components/default/default.component';
import { PersonFormComponent } from './components/person-form/person-form.component';


const routes: Routes = [
  { path: 'default', component: DefaultComponent },
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'new', component: NewComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'add-person', component: PersonFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
