import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreatAcountComponent } from './pages/creat-acount/creat-acount.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota coringa para URLs não encontradas
  { path: 'login', component: LoginComponent },
  { path: 'creatAcount', component: CreatAcountComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
