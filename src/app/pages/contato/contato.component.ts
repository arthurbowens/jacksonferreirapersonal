import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { LeadService } from '../../core/services/lead.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    LucideAngularModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit, OnDestroy {
  @Input() embedded = false;
  contactForm!: FormGroup;
  isSubmitting = false;
  submitted = false;
  
  // Carousel properties
  translateX = 0;
  carouselSpeed = 0.5; // pixels per frame
  carouselInterval: any;
  
  portfolioImages = [
    {
      src: 'assets/images/escola1.png',
      alt: 'Projeto Escola 1',
      title: 'Sistema Educacional',
      description: 'Plataforma completa para gestão escolar'
    },
    {
      src: 'assets/images/escola2.png',
      alt: 'Projeto Escola 2',
      title: 'Portal do Aluno',
      description: 'Interface moderna para estudantes'
    },
    {
      src: 'assets/images/escola3.png',
      alt: 'Projeto Escola 3',
      title: 'Gestão Acadêmica',
      description: 'Sistema de controle acadêmico'
    },
    {
      src: 'assets/images/escola4.png',
      alt: 'Projeto Escola 4',
      title: 'E-learning Platform',
      description: 'Ambiente virtual de aprendizagem'
    },
    {
      src: 'assets/images/escola5.png',
      alt: 'Projeto Escola 5',
      title: 'Mobile App',
      description: 'Aplicativo móvel educacional'
    },
    {
      src: 'assets/images/escola6.png',
      alt: 'Projeto Escola 6',
      title: 'Dashboard Analytics',
      description: 'Painel de controle e métricas'
    },
    {
      src: 'assets/images/escola7.png',
      alt: 'Projeto Escola 7',
      title: 'Sistema de Notas',
      description: 'Controle de avaliações'
    },
    {
      src: 'assets/images/escola8.png',
      alt: 'Projeto Escola 8',
      title: 'Biblioteca Digital',
      description: 'Acervo online de materiais'
    },
    {
      src: 'assets/images/escola9.png',
      alt: 'Projeto Escola 9',
      title: 'Comunicação',
      description: 'Portal de comunicação escolar'
    },
    {
      src: 'assets/images/escola10.png',
      alt: 'Projeto Escola 10',
      title: 'Relatórios',
      description: 'Sistema de relatórios avançado'
    },
    {
      src: 'assets/images/escola11.png',
      alt: 'Projeto Escola 11',
      title: 'Financeiro',
      description: 'Gestão financeira escolar'
    },
    {
      src: 'assets/images/escola12.png',
      alt: 'Projeto Escola 12',
      title: 'Integração',
      description: 'Sistema integrado completo'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.analyticsService.trackPagina('Contato');
    this.initForm();
    if (typeof window !== 'undefined') {
      this.startCarousel();
    }
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.translateX -= this.carouselSpeed;
      
      // Reset position when we've moved through one complete set
      const itemWidth = 320; // Width of each carousel item
      const totalWidth = this.portfolioImages.length * itemWidth;
      
      if (Math.abs(this.translateX) >= totalWidth) {
        this.translateX = 0;
      }
    }, 16); // ~60fps
  }

  initForm() {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
      empresa: ['', [Validators.required, Validators.minLength(2)]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
      origem: ['contato']
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.analyticsService.trackFormulario('contato', 'iniciado');

      const formData = this.contactForm.value;
      
      this.leadService.enviarLead(formData).subscribe({
        next: (response) => {
          this.submitted = true;
          this.isSubmitting = false;
          this.analyticsService.trackFormulario('contato', 'completado');
          this.analyticsService.trackConversao('lead_contato', 0);
        },
        error: (error) => {
          console.error('Erro ao enviar contato:', error);
          this.isSubmitting = false;
          this.analyticsService.trackFormulario('contato', 'erro');
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} é obrigatório`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} deve ter pelo menos ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['pattern']) return 'Formato de telefone inválido';
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      nome: 'Nome',
      email: 'Email',
      telefone: 'Telefone',
      empresa: 'Empresa',
      mensagem: 'Mensagem'
    };
    return labels[fieldName] || fieldName;
  }

  formatPhone(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    this.contactForm.patchValue({ telefone: value });
  }
}
