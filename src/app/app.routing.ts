import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent}, //x defecto
    {path: 'empleado',component: EmpleadoComponent},
    {path: 'fruta',component: FrutaComponent},
    {path: 'pagina-principal',component: HomeComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'contacto/:page',component: ContactoComponent}, //url con parámetro
    {path: 'coches',component: CochesComponent}, 
    {path: '**', component: HomeComponent} //si hay error
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);