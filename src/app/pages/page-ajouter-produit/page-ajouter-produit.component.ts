import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-page-ajouter-produit',
  templateUrl: './page-ajouter-produit.component.html',
  styleUrls: ['./page-ajouter-produit.component.css']
})
export class PageAjouterProduitComponent implements OnInit {
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
  console.log(data);
  
this.genres = data;
    });


}

  onSubmit(): void {
    if(this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        alert('Produit ajouté avec succès');
        this.router.navigate(['/home']);  // Redirige vers la page d'accueil
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
