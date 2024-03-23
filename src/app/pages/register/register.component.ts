import { AuthService } from './../../shared/services/auth.service';
import { Component, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AUTH_ROUTES } from '../../shared/constants/routes/auth-routes';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @HostBinding('class') class =
    'w-full rounded-lg shadow !border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700';
  registerForm: FormGroup;
  loginLink = AUTH_ROUTES.login;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
    });
  }
  sendForm() {
    console.log(this.registerForm);

    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.getRawValue();
      this.authService
        .register({ username, email, password })
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
