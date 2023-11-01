import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

//   onSubmit():void {
//     this.authService.login(this.user).subscribe(
//       (response) => {
//         console.log('Login réussi', response);
//         this.router.navigate(['/product']);
//       },


// }
onSubmit(): void {
this.authService.login(this.user);
this.router.navigate(['/home']);
}

}
