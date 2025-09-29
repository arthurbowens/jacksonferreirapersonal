import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lead, LeadFormData } from '../models/lead.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http: HttpClient) { }

  /**
   * Envia lead para webhook e abre WhatsApp
   */
  enviarLead(leadData: LeadFormData): Observable<any> {
    const lead: Lead = {
      ...leadData,
      dataCriacao: new Date(),
      status: 'novo'
    };

    // Envia para webhook
    this.enviarWebhook(lead).subscribe();

    // Abre WhatsApp
    this.abrirWhatsApp(lead);

    return of({ success: true, lead });
  }

  /**
   * Envia dados do lead para webhook
   */
  private enviarWebhook(lead: Lead): Observable<any> {
    return this.http.post(environment.webhookUrl, lead);
  }

  /**
   * Abre WhatsApp com mensagem pré-formatada
   */
  abrirWhatsApp(lead: Lead): void {
    const mensagem = this.formatarMensagemWhatsApp(lead);
    const url = `https://wa.me/${environment.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  /**
   * Formata mensagem para WhatsApp
   */
  private formatarMensagemWhatsApp(lead: Lead): string {
    return `Olá! Gostaria de conhecer mais sobre o sistema personalizável.

*Dados do Lead:*
👤 Nome: ${lead.nome}
📧 Email: ${lead.email}
${lead.telefone ? `📱 Telefone: ${lead.telefone}` : ''}
🏢 Empresa: ${lead.empresa}
${lead.mensagem ? `💬 Mensagem: ${lead.mensagem}` : ''}
📍 Origem: ${lead.origem}

Aguardo seu contato!`;
  }

  /**
   * Salva lead no localStorage (fallback)
   */
  salvarLeadLocal(lead: Lead): void {
    const leads = this.getLeadsLocal();
    leads.push(lead);
    localStorage.setItem('leads', JSON.stringify(leads));
  }

  /**
   * Recupera leads do localStorage
   */
  getLeadsLocal(): Lead[] {
    const leads = localStorage.getItem('leads');
    return leads ? JSON.parse(leads) : [];
  }
}
