### REACT Learning Note

### Ray Wang

## Kia Ora this is Ray!

#### Here I'll be regularly updating the projects I've created in learning React and what I've learnt.

## JS-review

### In this project, I am learn how to use one basic tools in VScode: Quokka.js

#### This plugin can easy to find in VScode extension store.

#### Quokka.js is used to quickly create JavaScript / TypeScript prototypes. It's easy to run JS files in VScode and helps to troubleshoot bugs.

#### Very important is that he can return the results of the current code in a timely manner in the terminal on the left and below. This is very useful for me to start learning React.

In JS-review, I am learn how to use Destructuring in JS.

Destructuring is getting data out of object or Array.

You can use const to get the object, for example:

```js
const books = getBooks(); // const title = book.
const title = book.title; const author = book.
const title = book.title; const author = book.author;
```

You can also use

```js
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
```

this way you can get the object in the book.
This puts the elements of the object together.
Passed with console.log.

A similar approach can be used for elements in book, except for book:

```js
const primaryGenre = genres[0];
const secondaryGenre = genres[1];
```

Or:

```js
const [primaryGenre, secondaryGenre] = genres;
```
