import { Component, HostBinding } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../shared/store/auth/actions/auth.actions';
import { AUTH_ROUTES } from '../../shared/constants/routes/auth-routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @HostBinding('class') class =
    'w-full rounded-lg shadow !border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700';
    logInForm: FormGroup;
    registerLink = AUTH_ROUTES.register;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) {
    this.logInForm = this.formBuilder.group({
      email: new FormControl<string | null>('', [Validators.required]),
      password: new FormControl<string | null>('', [Validators.required]),
    });
  }

  sendForm() {
    if (this.logInForm.valid) {
      const { email, password } = this.logInForm.getRawValue();
      this.store.dispatch(authActions.login({ payload: { email, password } }));
    }
  }
}
