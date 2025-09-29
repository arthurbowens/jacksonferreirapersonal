import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, Check, Zap, Shield, Users, BarChart, Settings, Smartphone, Globe, MessageCircle, MapPin, Mail, Instagram, Clock } from 'lucide-angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardFeatureComponent, Feature } from '../../shared/components/card-feature/card-feature.component';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-funcionalidades',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LucideAngularModule,
    HeaderComponent,
    FooterComponent,
    CardFeatureComponent
  ],
  templateUrl: './funcionalidades.component.html',
  styleUrl: './funcionalidades.component.scss'
})
export class FuncionalidadesComponent implements OnInit {
  @Input() embedded = false;
  
  features: Feature[] = [
    {
      icon: 'smartphone',
      title: 'Design Responsivo',
      description: 'Seu site funciona perfeitamente em celular, tablet e computador.',
      highlight: true
    },
    {
      icon: 'message-circle',
      title: 'Botão WhatsApp',
      description: 'Integração direta com WhatsApp para receber pedidos e agendamentos.',
      highlight: false
    },
    {
      icon: 'map-pin',
      title: 'Mapa de Localização',
      description: 'Clientes encontram sua loja facilmente com mapa integrado.',
      highlight: false
    },
    {
      icon: 'mail',
      title: 'Formulário de Contato',
      description: 'Receba mensagens e solicitações diretamente no seu site.',
      highlight: false
    },
    {
      icon: 'instagram',
      title: 'Redes Sociais',
      description: 'Links diretos para Instagram, Facebook e outras redes sociais.',
      highlight: false
    },
    {
      icon: 'clock',
      title: 'Horário de Funcionamento',
      description: 'Mostre seus horários de atendimento de forma clara.',
      highlight: false
    }
  ];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.trackPagina('Funcionalidades');
  }

  onCTAClick(cta: string, location: string) {
    this.analyticsService.trackCTA(cta, location);
  }
}
