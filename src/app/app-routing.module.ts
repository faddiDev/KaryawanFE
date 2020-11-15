import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaryawanindexComponent } from './karyawanindex/karyawanindex.component';
import { KaryawaneditaddComponent } from './karyawaneditadd/karyawaneditadd.component';

const routes: Routes = [
  { path: 'promise/karyawanindex', component: KaryawanindexComponent },
  { path: '', redirectTo: 'promise/karyawanindex', pathMatch: 'full' },
  { path: 'promise/karyawaneditadd', component: KaryawaneditaddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [KaryawanindexComponent, KaryawaneditaddComponent]