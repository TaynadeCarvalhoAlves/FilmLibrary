using Google.Cloud.Firestore;

namespace LibraryFilmes_Back.Models
{
    [FirestoreData]
    public class Movie
    {
        [FirestoreProperty]
        public string? Id { get; set; }

        [FirestoreProperty]
        public string Title { get; set; }

        [FirestoreProperty]
        public int Year { get; set; }

        [FirestoreProperty]
        public string? Genre { get; set; }

        [FirestoreProperty]
        public string? Director { get; set; }

        [FirestoreProperty]
        public string Description { get; set; }

        [FirestoreProperty]
        public string UrlImage { get; set; }
    }
}
