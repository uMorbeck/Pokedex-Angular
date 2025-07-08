import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TeamListComponent } from '../../components/team-list/team-list.component';

@Component({
  selector: 'app-team',
  imports: [HeaderComponent, FooterComponent, TeamListComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
