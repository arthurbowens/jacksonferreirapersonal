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
      name: 'Lucas Pereira',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Depois que a pagina entrou no ar, comecei a receber muito mais gente pronta para fechar no WhatsApp. Mudou totalmente meu fluxo.',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'O aluno agora chega entendendo meu metodo e os valores. Minhas conversas no direct ficaram mais objetivas e produtivas.',
      rating: 5
    },
    {
      name: 'Felipe Martins',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Eu perdia muito tempo com curioso. Com a pagina, os contatos chegam filtrados e a taxa de fechamento melhorou bastante.',
      rating: 5
    },
    {
      name: 'Aline Souza',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Em menos de uma semana eu ja sentia mais movimento no WhatsApp. A pagina deixou tudo claro para quem quer contratar.',
      rating: 5
    },
    {
      name: 'Gustavo Nunes',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Minha autoridade subiu muito. A pessoa olha a pagina e ja chega no WhatsApp mais confiante para fechar consultoria.',
      rating: 5
    },
    {
      name: 'Renata Oliveira',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Antes eu explicava tudo no direct. Agora a pagina faz esse trabalho por mim e eu consigo focar em fechar e atender melhor.',
      rating: 5
    },
    {
      name: 'Thiago Almeida',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'A estrutura ficou simples e muito eficiente. O numero de conversas qualificadas no WhatsApp aumentou nos primeiros dias.',
      rating: 5
    },
    {
      name: 'Carla Ferreira',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Hoje os alunos chegam com menos objecoes porque ja entenderam meu processo na pagina. Fecho mais rapido e com menos atrito.',
      rating: 5
    },
    {
      name: 'Bruno Carvalho',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'A pagina melhorou meu posicionamento e me ajudou a parar de depender so de direct aleatorio. Ficou muito mais profissional.',
      rating: 5
    },
    {
      name: 'Patricia Ramos',
      role: 'Personal Trainer',
      company: 'Avaliacao no Google',
      content: 'Eu queria algo direto para vender consultoria online e funcionou. Mais mensagem qualificada e mais aluno entrando no programa.',
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
