import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageModidierProduitComponent } from './pages/page-modidier-produit/page-modidier-produit.component';
import { PageAjouterProduitComponent } from './pages/page-ajouter-produit/page-ajouter-produit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { guardAuthGuard } from './guard-auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent,  },
  { path: 'login', component: PageLoginComponent, },
  { path: 'modifier', component: PageModidierProduitComponent, canActivate: [guardAuthGuard] },
    { path: 'ajouter-produit', component: PageAjouterProduitComponent, canActivate: [guardAuthGuard] },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
