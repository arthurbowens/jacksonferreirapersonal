import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

export interface Feature {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-card-feature',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-feature.component.html',
  styleUrl: './card-feature.component.scss'
})
export class CardFeatureComponent {
  @Input() feature!: Feature;
}
