import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [NgFor],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css',
})
export class AchievementComponent {
  achievements = Array.from({ length: 6 }, (_, i) => i + 1);
}
