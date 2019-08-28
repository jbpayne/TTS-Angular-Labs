import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { NewerComponent } from './newer/newer.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  { path: 'default', component: DefaultComponent },
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'new', component: NewComponent },
  { path: 'newer', component: NewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
