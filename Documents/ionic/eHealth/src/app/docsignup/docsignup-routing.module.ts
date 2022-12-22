import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsignupPage } from './docsignup.page';

const routes: Routes = [
  {
    path: '',
    component: DocsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsignupPageRoutingModule {}
