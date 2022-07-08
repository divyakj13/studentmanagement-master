import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HttpClientModule  } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { UpdateHolidayComponent } from './update-holiday/update-holiday.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReferenceComponent } from './reference/reference.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    StudentDetailsComponent,
    SidenavbarComponent,
    HolidayComponent,
    UpdateHolidayComponent,
    PageComponent,
    FrontpageComponent,
    ReferenceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgImageSliderModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
