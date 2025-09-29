import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, Input, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AnalyticsService } from '../../core/services/analytics.service';

export interface Trabalho {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  images: string[];
  technologies: string[];
  date: string;
  client: string;
  featured: boolean;
}

@Component({
  selector: 'app-trabalhos',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LucideAngularModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './trabalhos.component.html',
  styleUrl: './trabalhos.component.scss'
})
export class TrabalhosComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() embedded = false;
  
  @ViewChildren('portfolioItem') portfolioItems!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('validataItem') validataItems!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('financeItem') financeItems!: QueryList<ElementRef<HTMLElement>>;
  
  // Carousel properties
  translateX = 0;
  carouselSpeed = 0.5; // pixels per frame
  carouselInterval: any;
  translateXValidata = 0;
  carouselIntervalValidata: any;
  translateXFinance = 0;
  carouselIntervalFinance: any;
  
  itemWidthPortfolio = 320;
  itemWidthValidata = 320;
  itemWidthFinance = 320;
  
  portfolioImages = [
    {
      src: 'assets/images/escola1.png',
      alt: 'Projeto Escola 1',
      title: 'Projeto para Escola',
      description: 'Website institucional pensado para instituições de ensino: moderno, rápido, responsivo e com foco em resultado. Apresenta a escola, cursos, notícias e canais de contato de forma clara e profissional.'
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

  validataImages = [
    { src: 'assets/images/print 1 validata.png', alt: 'Validata - Tela 1' },
    { src: 'assets/images/print 2 validata.png', alt: 'Validata - Tela 2' },
    { src: 'assets/images/print 3 validata.png', alt: 'Validata - Tela 3' },
    { src: 'assets/images/print 4 validata.png', alt: 'Validata - Tela 4' },
    { src: 'assets/images/print 5 validata.png', alt: 'Validata - Tela 5' },
    { src: 'assets/images/print 6 validata.png', alt: 'Validata - Tela 6' },
    { src: 'assets/images/print 7 validata.png', alt: 'Validata - Tela 7' },
    { src: 'assets/images/print 8 validata.png', alt: 'Validata - Tela 8' }
  ];
  
  financeImages = [
    { src: 'assets/images/financa1.png', alt: 'Finance - Tela 1' },
    { src: 'assets/images/financa2.png', alt: 'Finance - Tela 2' },
    { src: 'assets/images/financa3.png', alt: 'Finance - Tela 3' },
    { src: 'assets/images/financa4.png', alt: 'Finance - Tela 4' }
  ];
  
  trabalhos: Trabalho[] = [
    {
      id: 1,
      title: 'Site Institucional para Escola',
      description: 'Plataforma educacional completa com sistema de gestão, área de notícias, galeria de trabalhos, comunicação escolar e recursos interativos. Design moderno e totalmente responsivo.',
      category: 'Educação',
      image: '/assets/images/escola1.png',
      images: [
        '/assets/images/escola1.png',
        '/assets/images/escola2.png',
        '/assets/images/escola3.png',
        '/assets/images/escola4.png',
        '/assets/images/escola5.png',
        '/assets/images/escola6.png',
        '/assets/images/escola7.png',
        '/assets/images/escola8.png',
        '/assets/images/escola9.png',
        '/assets/images/escola10.png',
        '/assets/images/escola11.png',
        '/assets/images/escola12.png'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'Responsivo', 'Sistema de Gestão', 'Blog', 'Galeria'],
      date: '2024',
      client: 'Instituição Educacional',
      featured: true
    }
  ];

  categories = ['Todos', 'Educação', 'Lanchonete', 'Barbearia', 'Restaurante', 'Pizzaria', 'Café', 'Salão'];
  selectedCategory = 'Todos';
  currentImageIndex = 0;
  isModalOpen = false;
  modalImageIndex = 0;
  activeGallery: 'portfolio' | 'validata' | 'finance' = 'portfolio';

  constructor(
    private analyticsService: AnalyticsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.analyticsService.trackPagina('Trabalhos');
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
      this.startValidataCarousel();
      this.startFinanceCarousel();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.measureItemWidths(), 0);
    }
  }

  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.carouselIntervalValidata) {
      clearInterval(this.carouselIntervalValidata);
    }
    if (this.carouselIntervalFinance) {
      clearInterval(this.carouselIntervalFinance);
    }
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.translateX -= this.carouselSpeed;
      
      const totalWidth = this.portfolioImages.length * this.itemWidthPortfolio;
      
      if (Math.abs(this.translateX) >= totalWidth) {
        this.translateX = 0;
      }
    }, 16); // ~60fps
  }

  startValidataCarousel() {
    this.carouselIntervalValidata = setInterval(() => {
      this.translateXValidata -= this.carouselSpeed;
      const totalWidth = this.validataImages.length * this.itemWidthValidata;
      if (Math.abs(this.translateXValidata) >= totalWidth) {
        this.translateXValidata = 0;
      }
    }, 16);
  }

  startFinanceCarousel() {
    this.carouselIntervalFinance = setInterval(() => {
      this.translateXFinance -= this.carouselSpeed;
      const totalWidth = this.financeImages.length * this.itemWidthFinance;
      if (Math.abs(this.translateXFinance) >= totalWidth) {
        this.translateXFinance = 0;
      }
    }, 16);
  }

  onCTAClick(cta: string, location: string) {
    this.analyticsService.trackCTA(cta, location);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredTrabalhos() {
    if (this.selectedCategory === 'Todos') {
      return this.trabalhos;
    }
    return this.trabalhos.filter(trabalho => trabalho.category === this.selectedCategory);
  }

  get featuredTrabalhos() {
    return this.trabalhos.filter(trabalho => trabalho.featured);
  }

  onImageError(event: any) {
    const img = event.target as HTMLImageElement;
    const fallback = img.nextElementSibling as HTMLElement;
    if (img && fallback) {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    }
  }

  nextImage() {
    const trabalho = this.trabalhos[0];
    if (this.currentImageIndex < trabalho.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage() {
    const trabalho = this.trabalhos[0];
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = trabalho.images.length - 1;
    }
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  get currentImage() {
    return this.trabalhos[0].images[this.currentImageIndex];
  }

  openModal(gallery: 'portfolio' | 'validata' | 'finance' = 'portfolio', index: number = 0) {
    this.activeGallery = gallery;
    this.isModalOpen = true;
    this.modalImageIndex = index;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.isModalOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }

  nextModalImage() {
    const total = this.galleryImages.length;
    if (this.modalImageIndex < total - 1) {
      this.modalImageIndex++;
    } else {
      this.modalImageIndex = 0;
    }
  }

  prevModalImage() {
    const total = this.galleryImages.length;
    if (this.modalImageIndex > 0) {
      this.modalImageIndex--;
    } else {
      this.modalImageIndex = total - 1;
    }
  }

  goToModalImage(index: number) {
    this.modalImageIndex = index;
  }

  get galleryImages() {
    if (this.activeGallery === 'portfolio') return this.portfolioImages;
    if (this.activeGallery === 'validata') return this.validataImages;
    return this.financeImages;
  }

  get modalCurrentImage() {
    return this.galleryImages[this.modalImageIndex].src;
  }

  private measureItemWidths() {
    const getWidth = (el?: ElementRef<HTMLElement>) => el?.nativeElement?.getBoundingClientRect().width || 320;
    const firstPortfolio = this.portfolioItems?.first;
    const firstValidata = this.validataItems?.first;
    const firstFinance = this.financeItems?.first;
    this.itemWidthPortfolio = getWidth(firstPortfolio);
    this.itemWidthValidata = getWidth(firstValidata);
    this.itemWidthFinance = getWidth(firstFinance);
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.measureItemWidths();
    }
  }

  onModalKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'ArrowLeft') {
      this.prevModalImage();
    } else if (event.key === 'ArrowRight') {
      this.nextModalImage();
    }
  }
}
