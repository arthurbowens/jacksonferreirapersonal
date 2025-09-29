export interface Lead {
  id?: string;
  nome: string;
  email: string;
  telefone?: string;
  empresa: string;
  mensagem?: string;
  origem: string;
  dataCriacao?: Date;
  status: 'novo' | 'contatado' | 'convertido' | 'perdido';
}

export interface LeadFormData {
  nome: string;
  email: string;
  telefone?: string;
  empresa: string;
  mensagem?: string;
  origem: string;
}
