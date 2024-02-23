import BookItem from "./BookItem";

export default function BookGrid() {
  const bookList = [
    {
      id: 1,
      name: "JavaScript and Jquery",
      author: "Jon Duckett",
      price: 62,
      star: 4,
      isFavorite: false,
    },
    {
      id: 2,
      name: "React.js Book",
      author: "Greg Sidelnikov",
      price: 14.99,
      star: 3.8,
      isFavorite: false,
    },
    {
      id: 3,
      name: "JavaScript from Beginning",
      author: "Laurence Lars Svekis",
      price: 20.44,
      star: 4.7,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Automating with Node",
      author: "Shaun Stone",
      price: 4.99,
      star: 4.4,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Beginning React wit",
      author: "Greg Lim",
      price: 16.99,
      star: 4.5,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Beginning React",
      author: "Greg Lim",
      price: 9.99,
      star: 4.2,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Python Crash Course",
      author: "Eric Matthes",
      price: 25.99,
      star: 4.6,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Learning Python",
      author: "Mark Lutz",
      price: 29.99,
      star: 4.3,
      isFavorite: false,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}
