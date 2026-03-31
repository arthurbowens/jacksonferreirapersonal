import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isSidebarOpen = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem('sidebarOpen');
      if (savedState !== null) {
        this.isSidebarOpen = savedState === 'true';
      }
      this.updateSidebarBodyClass();
    }

    // Fecha menu ao clicar fora - apenas no browser
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.menu-container')) {
          this.isMenuOpen = false;
        }
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('sidebar-collapsed');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('sidebarOpen', String(this.isSidebarOpen));
      this.updateSidebarBodyClass();
    }
  }

  private updateSidebarBodyClass() {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.classList.toggle('sidebar-collapsed', !this.isSidebarOpen);
  }
}
