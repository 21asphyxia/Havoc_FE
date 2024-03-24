import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromAuth } from '../../../shared/store/auth';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private store = inject(Store);
  member$ = this.store.select(fromAuth.selectMember);
  isAdmin$ = this.store.select(fromAuth.selectIsAdmin);

  constructor() {}
}
