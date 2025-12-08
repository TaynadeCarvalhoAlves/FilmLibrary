using LibraryFilmes_Back.Models;

namespace LibraryFilmes_Back.Services
{
    public interface  IFirestoreService
    {
        Task AddMovie(Movie movie);

        Task<List<Movie>> GetAllMovies();

        Task<Movie> GetMovieById(string id);

        Task UpdateMovie(string id, Movie movie);

        Task DeleteMovie(string id);
    }
}
