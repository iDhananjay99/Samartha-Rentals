import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-catalogue-view',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './catalogue-view.component.html',
  styleUrl: './catalogue-view.component.scss'
})
export class CatalogueViewComponent {

}
