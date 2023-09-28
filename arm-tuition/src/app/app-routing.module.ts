import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChooseUserComponent } from './choose-user/choose-user.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },
  {
    path: '', component: ChooseUserComponent
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'core', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
