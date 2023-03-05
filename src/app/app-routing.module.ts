import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './pages/all-events/all-events.component';
import { AllGalleryComponent } from './pages/all-gallery/all-gallery.component';
import { AllMenuComponent } from './pages/all-menu/all-menu.component';
import { AllPromosComponent } from './pages/all-promos/all-promos.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { AllSignaturesComponent } from './pages/all-signatures/all-signatures.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    pathMatch:'full'
  },
  {
    path:'all-events',
    component: AllEventsComponent
  },
  {
    path:'all-gallery',
    component: AllGalleryComponent
  },
  {
    path:'all-menu',
    component: AllMenuComponent
  },
  {
    path:'all-promos',
    component: AllPromosComponent
  },
  {
    path:'all-services',
    component: AllServicesComponent
  },
  {
    path:'all-signatures',
    component: AllSignaturesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
