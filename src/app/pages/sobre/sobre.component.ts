import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, Users, Target, Heart } from 'lucide-angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    LucideAngularModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {
  @Input() embedded = false;
  
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.trackPagina('Sobre');
  }

  onCTAClick(cta: string, location: string) {
    this.analyticsService.trackCTA(cta, location);
  }
}
