using LibraryFilmes_Back.Models;
using LibraryFilmes_Back.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryFilmes_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IFirestoreService _firestoreService;

        public MoviesController(IFirestoreService firestoreService)
        {
            _firestoreService = firestoreService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var movies = await _firestoreService.GetAllMovies();
            return Ok(movies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var movie = await _firestoreService.GetMovieById(id);

            if (movie == null)
                return NotFound("Filme não encontrado");

            return Ok(movie);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovie(Movie movie)
        {
           await _firestoreService.AddMovie(movie);
            return Ok("Filme adiconado com sucesso!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(string id, Movie movie)
        {
            movie.Id = id;
            
            await _firestoreService.UpdateMovie(id, movie);
            return Ok("Fime atualizado com sucesso!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(string id)
        {
            await _firestoreService.DeleteMovie(id);
            return Ok("Filme removido com sucesso!");
        }
    }
}
