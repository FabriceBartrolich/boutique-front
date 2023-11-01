import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-page-modidier-produit',
  templateUrl: './page-modidier-produit.component.html',
  styleUrls: ['./page-modidier-produit.component.css']
})
export class PageModidierProduitComponent implements OnInit {
productForm!: FormGroup;
genres: Genre[] = [];

constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  this.productForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      genre: new FormControl(''),
    });


}
  ngOnInit(): void {
    const id = this.route.snapshot.queryParams["id"];
this.productService.getAllCategories().subscribe((data) => {
this.genres = data;
// console.log('mon cul'+JSON.stringify(this.genres))
    });


}

  onSubmit(): void {
    if(this.productForm.valid) {
          const id = this.route.snapshot.queryParams["id"];
      this.productService.updateProduct(this.productForm.value, id ).subscribe(() => {
        alert('Produit modifié avec succès');
        this.router.navigate(['/home']);  // Redirige vers la page d'accueil
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}