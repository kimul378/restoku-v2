const itActsAsFavoriteMovieModel = (favoriteMovie) => {
  it('should return the movie that has been added', async () => {
    favoriteMovie.putRestoIDB({ id: 1 });
    favoriteMovie.putRestoIDB({ id: 2 });

    expect(await favoriteMovie.getRestoIDB(1)).toEqual({ id: 1 });
    expect(await favoriteMovie.getRestoIDB(2)).toEqual({ id: 2 });
    expect(await favoriteMovie.getRestoIDB(3)).toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteMovie.putRestoIDB({ aProperty: 'property' });

    expect(await favoriteMovie.getAllRestoIDB()).toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteMovie.putRestoIDB({ id: 1 });
    favoriteMovie.putRestoIDB({ id: 2 });

    expect(await favoriteMovie.getAllRestoIDB()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite movie', async () => {
    favoriteMovie.putRestoIDB({ id: 1 });
    favoriteMovie.putRestoIDB({ id: 2 });
    favoriteMovie.putRestoIDB({ id: 3 });

    await favoriteMovie.deleteRestoIDB(1);

    expect(await favoriteMovie.getAllRestoIDB()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteMovie.putRestoIDB({ id: 1 });
    favoriteMovie.putRestoIDB({ id: 2 });
    favoriteMovie.putRestoIDB({ id: 3 });

    await favoriteMovie.deleteRestoIDB(4);

    expect(await favoriteMovie.getAllRestoIDB()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should be able to search for movies', async () => {
    favoriteMovie.putRestoIDB({ id: 1, name: 'film a' });
    favoriteMovie.putRestoIDB({ id: 2, name: 'film b' });
    favoriteMovie.putRestoIDB({ id: 3, name: 'film abc' });
    favoriteMovie.putRestoIDB({ id: 4, name: 'ini mah film abcd' });

    expect(await favoriteMovie.searchMovies('film a')).toEqual([
      { id: 1, name: 'film a' },
      { id: 3, name: 'film abc' },
      { id: 4, name: 'ini mah film abcd' },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteMovieModel };
