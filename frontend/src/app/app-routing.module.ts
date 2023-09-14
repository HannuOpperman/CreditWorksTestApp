import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicles', component: VehicleComponent },
  { path: 'manufacturers', component: ManufacturerComponent },
  { path: 'categories', component: CategoryComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
