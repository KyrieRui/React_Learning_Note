const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

// const books = getBooks();
// books;

const book = getBook(3);
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

// ues rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// const [primaryGenre, ...otherGenres, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [genres, "epic fantasy"];
// newGenres;

// we want the feature one by one
const newGenres = [...genres, "epic fantasy"];
newGenres;

// objects
// const updatedBook = {
//   moviePublicationDate: "2012-12-19",
//   pages: 1220,
//   ...book,
// };
// updatedBook;

// inside book have other book property which contain book self and moviePublicationDate property
// what we want is one object with contain all the properties and the new moviePublicationDate property

// this is how we add new property to object useing spread operator
// it is samply overwrite them
// const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
// updatedBook;

// the '...' basically take all the elements, into this new object, and contain the original properties
// then we have two pages properties, the second one will overwrite the first one when'pages:1210' at last
// otherwize the pages will still be 1216
const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // overwrite a existing property
  pages: 1210,
};
updatedBook;

// create a summary object
// const summary = `${title} is a book ${2 + 4}`;
// summary;

const getYear = (str) => str.split("-")[0];

const summary = `${title} is a ${pages}-pages long book, was writen by ${author}, and published on ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

// some times we not ues if-else, we can use ternary operator
// first part is condition, second part is if true, third part is if false
pages > 1000 ? "over 1000" : "less than 1000";
// it have three parts, first part is condition, second part is if true, third part is if false

// we can also put this ternary operator into a const
const pagesSummary = pages > 1000 ? "over 1000" : "less than 1000";
pagesSummary;

console.log(`The book has ${pagesSummary} pages`);

// Traditional function
// function getYear(str) {
//   return str.split("-")[0];
// }

// console.log(getYear(publicationDate));

// Arrow function
// const getYear = (str) => str.split("-")[0];
// we can also pass multiple parameters
// (str, a, b) => str.split("-")[0];
// we dont need 'return' keyword
// easy way to use in arrow method
// const getYear = (str) => {
//   // more function logic...
//   // ...
//   return str.split("-")[0];
// };

console.log(getYear(publicationDate));

console.log(false && "hello");
console.log(true && "hello");

console.log(hasMovieAdaptation && "This book has a movie adaptation");

console.log("jonas" && "hello");
console.log(0 && "hello");

console.log(true || "hello");
console.log(false || "hello");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "No translation";
spanishTranslation;

// console.log(book.reviews.librarything.rating.reviewsCount);
// const librarythingReviewsCount =
//   book.reviews.librarything.rating.reviewsCount || "No data here";

// librarythingReviewsCount;

// const count = book.reviews.librarything.rating.reviewsCount ?? "No data here";
// count;

function getTotalReview(book) {
  const firstValue = book.reviews.goodreads.reviewsCount;
  const secondValue = book.reviews.librarything.reviewsCount;
  return firstValue + secondValue;
}

console.log(getTotalReview(book));
