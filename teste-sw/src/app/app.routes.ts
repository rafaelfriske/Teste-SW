import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tarefas',
    component: TarefasComponent,
    canActivate: [AuthGuard] // Rota protegida
  },
  {
    path: '',
    redirectTo: '/tarefas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tarefas' // Ou criar um componente PageNotFoundComponent
  }
];