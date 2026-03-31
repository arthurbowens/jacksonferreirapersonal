import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { FuncionalidadesComponent } from '../funcionalidades/funcionalidades.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FuncionalidadesComponent,
    SobreComponent,
    ContatoComponent
  ],
  templateUrl: './landing.component.html'
})
export class LandingComponent {}


