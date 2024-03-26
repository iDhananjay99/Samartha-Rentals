import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, NgbModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  phoneNum: String = '7645327193'
}
