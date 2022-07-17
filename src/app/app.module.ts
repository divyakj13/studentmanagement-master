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
import { HolidayComponent } from './holiday/holiday.component';
import { HttpClientModule  } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { UpdateHolidayComponent } from './update-holiday/update-holiday.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReferenceComponent } from './reference/reference.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { LoginService } from './service/login.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule } from '@angular/material/menu';
import { FileComponent } from './file/file.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    StudentDetailsComponent,
    HolidayComponent,
    UpdateHolidayComponent,
    PageComponent,
    FrontpageComponent,
    ReferenceComponent,
    HeaderComponent,
    FileComponent,
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
    NgImageSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatMenuModule
  ],
  providers: [LoginService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
