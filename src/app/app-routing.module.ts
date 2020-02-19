import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideComponent } from './side/side.component';


const routes: Routes = [
  {path: '', component: SideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
