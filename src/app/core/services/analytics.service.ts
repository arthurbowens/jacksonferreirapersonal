import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

declare let gtag: Function;
declare let fbq: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  /**
   * Inicializa Google Analytics
   */
  inicializarGoogleAnalytics(): void {
    if (environment.googleAnalyticsId && typeof gtag !== 'undefined') {
      gtag('config', environment.googleAnalyticsId);
    }
  }

  /**
   * Inicializa Facebook Pixel
   */
  inicializarFacebookPixel(): void {
    if (environment.facebookPixelId && typeof fbq !== 'undefined') {
      fbq('init', environment.facebookPixelId);
      fbq('track', 'PageView');
    }
  }

  /**
   * Track evento de conversão
   */
  trackConversao(evento: string, valor?: number): void {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', evento, {
        event_category: 'conversion',
        event_label: 'lead_form',
        value: valor
      });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: evento,
        value: valor
      });
    }
  }

  /**
   * Track página visitada
   */
  trackPagina(pagina: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('config', environment.googleAnalyticsId, {
        page_title: pagina,
        page_location: window.location.href
      });
    }
  }

  /**
   * Track clique em CTA
   */
  trackCTA(cta: string, localizacao: string): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'cta',
        event_label: `${cta}_${localizacao}`,
        value: 1
      });
    }
  }

  /**
   * Track formulário preenchido
   */
  trackFormulario(formulario: string, status: 'iniciado' | 'completado' | 'erro'): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'form',
        event_label: `${formulario}_${status}`,
        value: status === 'completado' ? 1 : 0
      });
    }
  }
}
