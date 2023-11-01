import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent {
  products: Product[] = [];
  isLoggedIn : boolean  = false;

  constructor(private productService: ProductService, private router : Router, private authService : AuthService) {    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });}

ajouter() {
    this.router.navigate(['/ajouter-produit']); 
  }
  
  supprimer(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    })
  }

  modifier(id: number) {
    this.router.navigate(['/modifier'], { queryParams: { id: id } });
  }



}
