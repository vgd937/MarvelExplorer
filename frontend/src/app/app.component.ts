import { Component } from '@angular/core';
import { CharacterSearchComponent } from './character-search/character-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marvel Explorer';
}
