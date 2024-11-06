import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './componntes/usuario/usuario.component';
import { DepartamentosComponent } from './componentes/departamentos/departamentos.component';
import { EditarUsuarioComponent } from './componntes/editar-usuario/editar-usuario.component';
import { NgModule } from '@angular/core';
import { HeroComponent } from './componentesv/hero/hero.component';
import { EquipoComponent } from './componentesv/equipo/equipo.component';

export const routes: Routes = [
    {path:"usuarios", component:UsuarioComponent},
    {path:"usuario/ :id", component:UsuarioComponent},
    {path:"departamentos", component:DepartamentosComponent},
    {path:"editar-usuario/:id", component:EditarUsuarioComponent},
    {path:"editar-usuario", component:EditarUsuarioComponent},
    {path:"hero", component:HeroComponent},
    {path:"equipo",component:EquipoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { } 