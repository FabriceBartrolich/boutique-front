import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageModidierProduitComponent } from './pages/page-modidier-produit/page-modidier-produit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PageAjouterProduitComponent } from './pages/page-ajouter-produit/page-ajouter-produit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { guardAuthGuard } from './guard-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    NavbarComponent,
    PageAdminComponent,
    PageLoginComponent,
    PageModidierProduitComponent,
    PageAjouterProduitComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
