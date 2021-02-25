import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StaticPageComponent } from './pages/static-page/static-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'static', component: StaticPageComponent },
  { path: 'edit', component: ContactEditComponent },
  { path: 'edit/:id', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
