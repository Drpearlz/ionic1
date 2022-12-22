import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchdoctorsPage } from './searchdoctors.page';

const routes: Routes = [
  {
    path: '',
    component: SearchdoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchdoctorsPageRoutingModule {}
