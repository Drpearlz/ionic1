import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsignupPageRoutingModule } from './docsignup-routing.module';

import { DocsignupPage } from './docsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsignupPageRoutingModule
  ],
  declarations: [DocsignupPage]
})
export class DocsignupPageModule {}
