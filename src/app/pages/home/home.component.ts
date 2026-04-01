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
      title: 'Mais alunos chegando no seu WhatsApp',
      description: 'Uma página simples que filtra melhor os interessados e aumenta o volume de contatos qualificados.',
      highlight: true
    },
    {
      icon: 'clock',
      title: 'Menos tempo explicando o básico',
      description: 'O aluno chega mais preparado, entendendo sua consultoria antes de te chamar.',
      highlight: false
    },
    {
      icon: 'palette',
      title: 'Seu método explicado com clareza',
      description: 'Estrutura feita para mostrar proposta, diferenciais e benefícios de forma objetiva.',
      highlight: false
    },
    {
      icon: 'layers',
      title: 'Processo simples e organizado',
      description: 'Você recebe uma estrutura clara para apresentar sua consultoria e fechar com mais facilidade.',
      highlight: false
    },
    {
      icon: 'zap',
      title: 'Fluxo direto para fechar no WhatsApp',
      description: 'O visitante entende, confia e clica para falar com você no momento certo.',
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
      name: 'Rafael Mendes',
      role: 'Personal Trainer',
      company: 'Consultoria Online',
      content: 'Depois da página, os contatos no WhatsApp chegaram muito mais qualificados e eu comecei a fechar mais alunos.',
      rating: 5
    },
    {
      name: 'Camila Rocha',
      role: 'Personal',
      company: 'Treino Presencial',
      content: 'Agora meu método está claro e os alunos chegam entendendo melhor o processo. Economizo muito tempo no atendimento.',
      rating: 5
    },
    {
      name: 'Bruno Alves',
      role: 'Coach de Performance',
      company: 'Treino Híbrido',
      content: 'A organização da oferta na página deixou minha comunicação muito mais profissional e as conversões melhoraram.',
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
