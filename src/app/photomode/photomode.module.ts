import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PhotomodePage } from './photomode.page';

import { PhotomodePageRoutingModule } from './photomode-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PhotomodePageRoutingModule],
  declarations: [PhotomodePage],
})
export class PhotomodePageModule {}
