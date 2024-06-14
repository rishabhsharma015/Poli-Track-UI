import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { BoothListComponent } from './components/booth-list/booth-list.component';
import { FormsComponent } from './components/forms/forms.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authboothListGuard } from './guards/authbooth-list.guard';
import { ShowuidComponent } from './components/showuid/showuid.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authdashboardGuard } from './guards/authdashboard.guard';


export const routes: Routes = [
    {path: "", component: LandingComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "contact", component: ContactComponent},
    {path: "about", component: AboutComponent},
    {path: "forgot", component: ForgotComponent},
    {path: "boothList", component: BoothListComponent, canActivate: [authboothListGuard]},
    {path: "forms", component: FormsComponent},
    {path: "success", component: ShowuidComponent},
    {path: "dashboard", component: DashboardComponent, canActivate: [authdashboardGuard]},
    {path: "**", component: NotFoundComponent},
];
