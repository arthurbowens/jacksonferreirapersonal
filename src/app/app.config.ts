import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { LucideAngularModule, 
  Menu, X, Mail, Phone, MapPin, Send,
  ArrowRight, Eye, ExternalLink, Star, Calendar, Clock, User, Users, Target, MessageCircle, ShieldCheck, Zap, Image, Images, ChevronLeft, ChevronRight, Maximize2, Heart,
  Smartphone, Palette, Layers,
  Linkedin, Instagram, Twitter } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })), 
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu, X, Mail, Phone, MapPin, Send,
        ArrowRight, Eye, ExternalLink, Star, Calendar, Clock, User, Users, Target, MessageCircle, ShieldCheck, Zap, Image, Images, ChevronLeft, ChevronRight, Maximize2, Heart,
        Smartphone, Palette, Layers,
        Linkedin, Instagram, Twitter
      })
    )
  ]
};
