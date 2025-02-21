import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/portofolio-web/header/header.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.css',
})
export class PortfolioWebComponent {}
