import { Component, ViewChild } from '@angular/core';
import {
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  FormModule,
  ModalModule,
  TableModule,
} from '@coreui/angular';
import { Declaration } from '../../../shared/interfaces/models/declaration.model';
import { DeclarationService } from '../../../shared/services/declaration.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-declarations',
  standalone: true,
  imports: [
    ColComponent,
    CardBodyComponent,
    CardComponent,
    TableModule,
    ButtonModule,
    ModalModule,
    FormsModule,
    FormModule,
    NgClass,
  ],
  templateUrl: './declarations.component.html',
  styleUrl: './declarations.component.scss',
})
export class DeclarationsComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('closeModal') closeModal: any;

  declarations: Declaration[] = [];

  selectedDeclaration: Declaration = {
    id: 0,
    winner: '',
    loser: '',
    game: '',
    matchId: 0,
    image: '',
    status: '',
  };

  constructor(private declarationService: DeclarationService) {
    this.declarationService.getAll().subscribe((declarations) => {
      this.declarations = declarations;
    });
  }

  selectDeclaration(declaration: Declaration) {
    this.selectedDeclaration = declaration;
  }

  onSubmit() {
    this.declarationService
      .approve(this.selectedDeclaration.id)
      .subscribe((data) => {
        this.declarations = this.declarations.map((declaration) => {
          if (declaration.id === this.selectedDeclaration.id) {
            return data;
          }
          return declaration;
        });
      });
    this.closeModal.nativeElement.click();
  }
}
