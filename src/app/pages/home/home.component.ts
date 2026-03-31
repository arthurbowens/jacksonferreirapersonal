import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, Check, Star, Users, Zap, Shield } from 'lucide-angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardFeatureComponent, Feature } from '../../shared/components/card-feature/card-feature.component';
import { TestimonialComponent, Testimonial } from '../../shared/components/testimonial/testimonial.component';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LucideAngularModule,
    HeaderComponent,
    FooterComponent,
    CardFeatureComponent,
    TestimonialComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Input() embedded = false;
  
  features: Feature[] = [
    {
      icon: 'smartphone',
      title: 'Sua Clínica Aberta 24h por Dia.',
      description: 'Atraia pacientes qualificados do Google e Instagram com uma estrutura que nunca fecha. Previsibilidade de agendamentos reais.',
      highlight: true
    },
    {
      icon: 'clock',
      title: 'Seu Posicionamento Premium no Ar em 7 Dias Úteis.',
      description: 'Agilidade sem abrir mão da credibilidade. Esteja pronto para prospectar pacientes de alto ticket rapidamente.',
      highlight: false
    },
    {
      icon: 'palette',
      title: 'Credibilidade e Autoridade Digital Instantânea.',
      description: 'Visual sob medida, pensado para transmitir confiança ao paciente de saúde exigente antes mesmo dele marcar.',
      highlight: false
    },
    {
      icon: 'layers',
      title: 'Controle e Rastreamento Total de Pacientes.',
      description: 'Integração direta com WhatsApp, formulário de contato e monitoramento completo de conversões.',
      highlight: false
    },
    {
      icon: 'zap',
      title: 'Domine as Buscas Locais no Google.',
      description: 'Apareça na hora exata que o paciente premium está procurando pela sua especialidade na sua região.',
      highlight: false
    },
    {
      icon: 'shield-check',
      title: 'Suporte e manutenção contínuos',
      description: 'Atualizações, monitoramento e ajustes para manter tudo sempre no ar.',
      highlight: false
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Telma Oliveira',
      role: 'Proprietária',
      company: 'Lanchonete do Bairro',
      content: 'Site profissional e moderno! Agora os clientes conseguem ver o cardápio e fazer pedidos pelo WhatsApp.',
      rating: 5
    },
    {
      name: 'Iago Murilo',
      role: 'Barbeiro',
      company: 'Barbearia Moderna',
      content: 'Design que combina perfeitamente com meu negócio. Os clientes conseguem agendar horários facilmente.',
      rating: 5
    },
    {
      name: 'Jared Michael',
      role: 'Chef',
      company: 'Restaurante Sabor',
      content: 'Entrega rápida e site responsivo. Perfeito para mostrar nossos pratos e receber reservas.',
      rating: 5
    }
  ];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.trackPagina('Home');
  }

  onCTAClick(cta: string, location: string) {
    this.analyticsService.trackCTA(cta, location);
  }
}
