import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCharactersComponent } from './form-characters/form-characters.component';

const routes: Routes = [
 /*
  { path: 'form', component: FormCharactersComponent }
 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
