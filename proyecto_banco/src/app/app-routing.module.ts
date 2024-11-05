import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { breadcrumb: 'Inicio'}
  },
  {
    path:'pages',
    children:[
      {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
      {path: 'servicios', loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)},
      {path: 'creditos', loadChildren: () => import('./pages/creditos/creditos.module').then(m => m.CreditosModule)},
      {path: 'inversiones', loadChildren: () => import('./pages/inversiones/inversiones.module').then(m => m.InversionesModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
