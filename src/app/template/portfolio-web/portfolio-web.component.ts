import { Component } from '@angular/core';
import { HeaderComponent } from '@components/portofolio-web/header/header.component';
import { BannerComponent } from '@components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '@components/portofolio-web/header-menu/header-menu.component';
import { AboutUsComponent } from '@components/portofolio-web/about-us/about-us.component';
import { NewsComponent } from '@components/portofolio-web/news/news.component';
import { AchievementComponent } from '@components/portofolio-web/achievement/achievement.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.css',
})
export class PortfolioWebComponent {}
