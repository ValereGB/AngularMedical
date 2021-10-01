import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInfirmiereComponent } from './create-infirmiere/create-infirmiere.component';
import { InfirmiereDetailsComponent } from './infirmiere-details/infirmiere-details.component';
import { InfirmiereListComponent } from './infirmiere-list/infirmiere-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInfirmiereComponent,
    InfirmiereDetailsComponent,
    InfirmiereListComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
