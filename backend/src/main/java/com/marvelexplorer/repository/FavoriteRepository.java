package com.marvelexplorer.repository;

import com.marvelexplorer.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {}