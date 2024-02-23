import { useState } from "react";
import BookFinderHeader from "./BookFinderHeader";
import BookGrid from "./BookGrid";

export default function BookFinderMain() {
  const bookList = [
    {
      id: 1,
      name: "JavaScript and Jquery",
      author: "Jon Duckett",
      price: 62,
      star: 4,
      isFavorite: false,
      publicationYear: 2012,
    },
    {
      id: 2,
      name: "React.js Book",
      author: "Greg Sidelnikov",
      price: 14.99,
      star: 3.8,
      isFavorite: false,
      publicationYear: 2016,
    },
    {
      id: 3,
      name: "JavaScript from Beginning",
      author: "Laurence Lars Svekis",
      price: 20.44,
      star: 4.7,
      isFavorite: false,
      publicationYear: 1998,
    },
    {
      id: 4,
      name: "Automating with Node",
      author: "Shaun Stone",
      price: 4.99,
      star: 4.4,
      isFavorite: false,
      publicationYear: 2010,
    },
    {
      id: 5,
      name: "Beginning React wit",
      author: "Greg Lim",
      price: 16.99,
      star: 4.5,
      isFavorite: false,
      publicationYear: 2020,
    },
    {
      id: 6,
      name: "Beginning React",
      author: "Greg Lim",
      price: 9.99,
      star: 4.2,
      isFavorite: false,
      publicationYear: 2001,
    },
    {
      id: 7,
      name: "Python Crash Course",
      author: "Eric Matthes",
      price: 25.99,
      star: 4.6,
      isFavorite: false,
      publicationYear: 1999,
    },
    {
      id: 8,
      name: "Learning Python",
      author: "Mark Lutz",
      price: 29.99,
      star: 4.3,
      isFavorite: false,
      publicationYear: 2024,
    },
  ];
  const [books, setBooks] = useState(bookList);

  function handleSearchText(searchText) {
    let searchLowerText = searchText.toLowerCase();
    let filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchLowerText)
    );
    setBooks([...filteredBooks]);
  }

  function handleSort(sortOption) {
    if (sortOption === "name_asc") {
      let newBooks = [...books];
      newBooks.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setBooks(newBooks);
    } else if (sortOption === "name_desc") {
      let newBooks = [...books];
      newBooks.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setBooks(newBooks);
    } else if (sortOption === "year_asc") {
      let newBooks = [...books];
      newBooks.sort((a, b) => {
        if (a.publicationYear > b.publicationYear) {
          return -1;
        } else if (a.publicationYear < b.publicationYear) {
          return 1;
        } else {
          return 0;
        }
      });
      setBooks(newBooks);
    } else if (sortOption === "year_desc") {
      let newBooks = [...books];
      newBooks.sort((a, b) => {
        if (a.publicationYear < b.publicationYear) {
          return -1;
        } else if (a.publicationYear > b.publicationYear) {
          return 1;
        } else {
          return 0;
        }
      });
      setBooks(newBooks);
    }
  }
  return (
    <main className="my-10 lg:my-14">
      <BookFinderHeader onSort={handleSort} onSearchText={handleSearchText} />
      <BookGrid books={books} />
    </main>
  );
}
