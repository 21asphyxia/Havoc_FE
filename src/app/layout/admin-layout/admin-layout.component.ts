import { iconSubset } from './../../icons/icon-subset';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { navItems } from './_nav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent, SidebarModule } from '@coreui/angular';
import { NgScrollbar } from 'ngx-scrollbar';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    RouterOutlet,
    DefaultHeaderComponent,
    NgScrollbar,
    ContainerComponent,
    SidebarModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  constructor(private iconSetService: IconSetService) {
    iconSetService.icons = { ...iconSubset };
  }
  public navItems = navItems;

  public sidebarMinimized = false;
  private changes?: MutationObserver;
  public element: HTMLElement = document.body;
}
