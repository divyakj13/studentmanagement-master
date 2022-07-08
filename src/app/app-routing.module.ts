import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AppComponent } from './app.component';
import { HolidayComponent } from './holiday/holiday.component';
import { UpdateHolidayComponent } from './update-holiday/update-holiday.component';
import { PageComponent } from './page/page.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReferenceComponent } from './reference/reference.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'studentdetails', component: StudentDetailsComponent },
  { path: 'sidenavbar', component: SidenavbarComponent },
  { path: 'app', component: AppComponent },
  { path: 'holiday-add/:_id', component: UpdateHolidayComponent },
  { path: 'page', component: PageComponent },
  { path: 'updateHoliday', component: UpdateHolidayComponent },
  {path:'header',component:HeaderComponent},
  { path: 'reference', component: ReferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
