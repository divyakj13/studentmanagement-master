import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HolidayComponent } from './holiday/holiday.component';
import { UpdateHolidayComponent } from './update-holiday/update-holiday.component';
import { PageComponent } from './page/page.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReferenceComponent } from './reference/reference.component';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  { path: 'holiday', component: HolidayComponent,canActivate:[AuthGuard]},
  { path: 'studentdetails', component: StudentDetailsComponent,canActivate:[AuthGuard]},
  { path: 'holiday-add/:_id', component: UpdateHolidayComponent,canActivate:[AuthGuard] },
  { path: 'page', component: PageComponent ,canActivate:[AuthGuard] },
  { path: 'updateHoliday', component: UpdateHolidayComponent,canActivate:[AuthGuard]  },
  { path: 'reference', component: ReferenceComponent,canActivate:[AuthGuard] },
  {path:'header',component:HeaderComponent,canActivate:[AuthGuard]}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
