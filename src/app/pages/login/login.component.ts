import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../shared/store/auth/actions/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @HostBinding('class') class =
    'w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700';
  logInForm: FormGroup;
  email: FormControl;
  password: FormControl;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store,
  ) {
    this.email = new FormControl<string | null>('', [Validators.required]);
    this.password = new FormControl<string | null>('', [Validators.required]);
    this.logInForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  sendForm() {
    if (this.logInForm.valid) {
      const { email, password } = this.logInForm.getRawValue();
      this.store.dispatch(authActions.login({ payload: { email, password } }));
    }
  }
}
