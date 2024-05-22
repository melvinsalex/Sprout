import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';


@Component({
  selector: 'app-markets',
  standalone: true,
  imports: [CommonModule, ChartsComponent],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.scss',
})
export class MarketsComponent {
 

}
