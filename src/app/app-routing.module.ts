import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsDetailComponent } from './jobs-detail/jobs-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'jobs-detail/:id', component: JobsDetailComponent},
  {path: 'jobs-detail/:id/company-detail/:id', component: CompanyDetailComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
