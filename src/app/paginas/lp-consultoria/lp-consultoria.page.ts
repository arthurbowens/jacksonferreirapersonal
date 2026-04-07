import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ResultadoCliente {
  imagem: string;
  alt: string;
}

@Component({
  selector: 'app-lp-consultoria-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lp-consultoria.page.html'
})
export class LpConsultoriaPage {
  readonly linkWhatsapp = `https://wa.me/5527997976623?text=${encodeURIComponent(
    'Fala, Jackson! Quero saber como funciona a consultoria.'
  )}`;

  readonly linkInstagram =
    'https://www.instagram.com/jacksonferreirapersonal?igsh=MWdzcm9hMjd4aG5lOA==';

  readonly servicos = [
    'Treinamento personalizado',
    'Aulas de grupo',
    'Planejamento de treino'
  ];

  readonly resultados: ResultadoCliente[] = [
    { imagem: '/imagens-lp/resultado1.jpeg', alt: 'Resultado de transformação' },
    { imagem: '/imagens-lp/resultado2.jpeg', alt: 'Resultado de transformação' }
  ];
}
