import { StateService } from './../../services/domain/state.service';
import { CityService } from './../../services/domain/city.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupPageRoutingModule,
  ],
  declarations: [SignupPage],
  providers: [
    CityService,
    StateService
  ]
})
export class SignupPageModule {}
