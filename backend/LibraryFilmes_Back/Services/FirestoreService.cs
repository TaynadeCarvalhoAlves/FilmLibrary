using Google.Cloud.Firestore;
using LibraryFilmes_Back.Models;

namespace LibraryFilmes_Back.Services
{
    public class FirestoreService : IFirestoreService
    {
        private readonly FirestoreDb _firestoreDb;

        public FirestoreService(IConfiguration configuration)
        {
            string projectId = configuration["Firestore:ProjectId"];
            string credentialPath = configuration["Firestore:CredentialPath"];

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialPath);

            _firestoreDb = FirestoreDb.Create(projectId);
        }

        public async Task AddMovie(Movie movie)
        {
            CollectionReference moviesRef = _firestoreDb.Collection("movies");

            await moviesRef.AddAsync(movie);
        }

        public async Task<List<Movie>> GetAllMovies()
        {
            CollectionReference moviesRef = _firestoreDb.Collection("movies");

            QuerySnapshot snapshot = await moviesRef.GetSnapshotAsync();

            List<Movie> movies = new List<Movie>();

            foreach (DocumentSnapshot document in snapshot.Documents)
            {
                if (document.Exists)
                {
                    Movie movie = document.ConvertTo<Movie>();
                    movie.Id = document.Id;
                    movies.Add(movie);
                }
            }

            return movies;
        }

        public async Task<Movie> GetMovieById(string id)
        { 
            DocumentReference docRef = _firestoreDb.Collection("movies").Document(id);

            DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
            if (!snapshot.Exists)
            {
                return null;
            }

            Movie movie = snapshot.ConvertTo<Movie>();
            movie.Id = snapshot.Id;

            return movie;
        }

        public async Task UpdateMovie(string id, Movie movie)
        {
            DocumentReference docRef = _firestoreDb.Collection("movies").Document(id);

            await docRef.SetAsync(movie, SetOptions.MergeAll);
        }

        public async Task DeleteMovie(string id)
        {
            DocumentReference docRef = _firestoreDb.Collection("movies").Document(id);

            await docRef.DeleteAsync();
        }   
    }
}
