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
      title: 'Site moderno, rápido e responsivo',
      description: 'Seu site funciona perfeitamente em qualquer dispositivo, do desktop ao celular.',
      highlight: true
    },
    {
      icon: 'clock',
      title: 'Entrega garantida em até 7 dias úteis',
      description: 'Agilidade sem abrir mão da qualidade. Seu site pronto em uma semana.',
      highlight: false
    },
    {
      icon: 'palette',
      title: 'Design 100% adaptado à identidade da sua marca',
      description: 'Visual sob medida, pensado para destacar sua identidade.',
      highlight: false
    },
    {
      icon: 'layers',
      title: 'Tudo que sua empresa precisa em um só lugar',
      description: 'Formulário de contato, mapa, redes sociais, WhatsApp e mais.',
      highlight: false
    },
    {
      icon: 'zap',
      title: 'SEO e performance otimizados',
      description: 'Páginas rápidas, bem indexadas e preparadas para ranquear melhor.',
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
