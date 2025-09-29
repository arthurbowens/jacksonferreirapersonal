import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FuncionalidadesComponent } from './pages/funcionalidades/funcionalidades.component';
import { TrabalhosComponent } from './pages/trabalhos/trabalhos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TermosComponent } from './pages/termos/termos.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'funcionalidades', component: FuncionalidadesComponent },
  { path: 'trabalhos', component: TrabalhosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'termos', component: TermosComponent },
  { path: 'privacidade', component: PrivacidadeComponent },
  { path: '**', redirectTo: '' }
];
