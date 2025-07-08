import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
