import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CountryComponent } from './admin/country/country.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { SignupComponent } from './signup/signup.component';
import { MainSiderComponent } from './main-sider/main-sider.component';
import { PrevDirective } from './prev.directive';
import { NextDirective } from './next.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TeacherComponent,
    CountryComponent,
    AdminHeaderComponent,
    SignupComponent,
    MainSiderComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
