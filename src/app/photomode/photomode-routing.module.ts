import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotomodePage } from './photomode.page';

const routes: Routes = [
  {
    path: '',
    component: PhotomodePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotomodePageRoutingModule {}
