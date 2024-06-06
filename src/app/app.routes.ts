import { Routes } from '@angular/router';
import { FormRetenidosPage } from './formularios/ObjetosRetenidos/form-retenidos/form-retenidos.page';
import { BandejaEntradaRetenidosPage } from './formularios/ObjetosRetenidos/bandeja-entrada-retenidos/bandeja-entrada-retenidos.page';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'form-retenidos',
    component: FormRetenidosPage,
  },
  {
    path: 'bandeja-entrada-retenidos',
    component : BandejaEntradaRetenidosPage
  },



];
