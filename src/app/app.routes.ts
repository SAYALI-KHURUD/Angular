import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { OrderMedicineComponent } from './order-medicine/order-medicine.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = 
[
    
  {
    path : '',
    component: WelcomeComponent
  },
    {
      path :'dashboard',
      component : DashboardComponent
    },
    {
        path :'appointment',
        component : AppointmentComponent
    },
    {
      path : 'order-medicine',
      component : OrderMedicineComponent
    },
    {
      path : 'lab-test',
      component : LabTestComponent
    },
    {
      path : 'registration',
      component : RegistrationComponent
    },
    {
      path : 'stock',
      component : StockComponent
    },
    { 
      path : 'login',
      component : LoginComponent

    },
    {
      path : 'logout',
      component : LogoutComponent
    }

    
];
