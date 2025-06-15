import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Favorite, FavoriteService } from '../services/favorites.service';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorite[] = [];
  newName = '';
  newId: number | null = null;
  newNote = '';

  constructor(private favService: FavoriteService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.favService.getAll().subscribe(favs => this.favorites = favs);
  }

  add() {
    if (this.newId && this.newName) {
      this.favService.add({ characterId: this.newId, characterName: this.newName, note: this.newNote })
        .subscribe(() => {
          this.load();
          this.newId = null;
          this.newName = '';
          this.newNote = '';
        });
    }
  }

  save(fav: Favorite) {
    this.favService.update(fav).subscribe(() => this.load());
  }

  remove(characterId: number) {
    this.favService.delete(characterId).subscribe(() => this.load());
  }
}
