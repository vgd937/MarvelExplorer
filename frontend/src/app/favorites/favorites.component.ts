import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Favorite, FavoriteService } from '../services/favorites.service';
import { Router } from '@angular/router';


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

  constructor(private favService: FavoriteService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.favService.getAll().subscribe(favs => this.favorites = favs);
  }

  save(fav: Favorite) {
    this.favService.update(fav).subscribe(() => this.load());
  }

  remove(characterId: number) {
    this.favService.delete(characterId).subscribe(() => this.load());
  }

  goToDetail(id: number) {
    this.router.navigate(['/character', id]);
  }
}
