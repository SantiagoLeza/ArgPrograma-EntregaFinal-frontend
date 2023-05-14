import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponentComponent } from './component/user-component/user-component.component';
import { PopupCardComponent } from './component/user-component/popup-card/popup-card.component';
import { PopupEditSectionComponent } from './component/user-component/popup-edit-section/popup-edit-section.component';
import { PopupAddContentComponent } from './component/user-component/popup-add-content/popup-add-content.component';
import { PopupEditContentComponent } from './component/user-component/popup-edit-content/popup-edit-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponentComponent,
    PopupCardComponent,
    PopupEditSectionComponent,
    PopupAddContentComponent,
    PopupEditContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
