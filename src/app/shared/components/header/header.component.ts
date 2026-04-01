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
  private readonly handleDocumentPointer = (event: Event) => {
    if (!this.isMenuOpen || !isPlatformBrowser(this.platformId)) return;

    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    const clickedInsideMenu = path.some(
      (node) => node instanceof HTMLElement && node.classList.contains('menu-container')
    );

    if (!clickedInsideMenu) {
      this.isMenuOpen = false;
      this.updateMobileMenuBodyClass();
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem('sidebarOpen');
      if (savedState !== null) {
        this.isSidebarOpen = savedState === 'true';
      }
      this.updateSidebarBodyClass();
    }

    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.handleDocumentPointer);
      document.addEventListener('touchstart', this.handleDocumentPointer, { passive: true });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('sidebar-collapsed');
      document.body.classList.remove('mobile-menu-open');
      document.removeEventListener('click', this.handleDocumentPointer);
      document.removeEventListener('touchstart', this.handleDocumentPointer);
    }
  }

  toggleMenu(event?: Event) {
    event?.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMobileMenuBodyClass();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateMobileMenuBodyClass();
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

  private updateMobileMenuBodyClass() {
    if (!isPlatformBrowser(this.platformId)) return;
    document.body.classList.toggle('mobile-menu-open', this.isMenuOpen);
  }
}
