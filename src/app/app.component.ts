import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CarousalViewComponent } from './carousal-view/carousal-view.component';
import { CatalogueViewComponent } from './catalogue-view/catalogue-view.component';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatIconModule, MatInputModule, 
  TopNavComponent, NgbModule, CarousalViewComponent, CatalogueViewComponent,
  SubFooterComponent, TestimonialSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rentals';
}
