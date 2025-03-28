import BookCollection from "@components/BookCollection";
import Script from "next/script";

import { type Book } from "~/types/books.type";

async function getBooks() {
  const [currentlyReadingData, toReadData, ReadData] = await Promise.all([
    fetch(
      "https://content-books.googleapis.com/books/v1/users/111625777314060457672/bookshelves/3/volumes",
    ),
    fetch(
      "https://content-books.googleapis.com/books/v1/users/111625777314060457672/bookshelves/2/volumes",
    ),
    fetch(
      "https://content-books.googleapis.com/books/v1/users/111625777314060457672/bookshelves/4/volumes",
    ),
  ]);
  const { items: readingBooks } = (await currentlyReadingData.json()) as {
    items: Book[];
  };
  const { items: toReadBooks } = (await toReadData.json()) as { items: Book[] };
  const { items: readBooks } = (await ReadData.json()) as { items: Book[] };
  return { readingBooks, toReadBooks, readBooks };
}

export default async function Bookshelf() {
  const { readingBooks, toReadBooks, readBooks } = await getBooks().catch(
    (err) => {
      console.error(err);
      return { readingBooks: [], toReadBooks: [], readBooks: [] };
    },
  );

  return (
    <>
      <Script type={"text/javascript"} src="/google-books-preview-api.js" />
      <Script
        type={"text/javascript"}
        src="/initialize-google-books-api.1.js"
      />
      <div className={"mb-16 mt-24 flex flex-col gap-10"}>
        {readingBooks.length === 0 &&
          toReadBooks.length === 0 &&
          readBooks.length === 0 && (
            <h1 className={"text-center text-xl"}>No books to show 😢</h1>
          )}
        <BookCollection
          readingBooks={readingBooks}
          toReadBooks={toReadBooks}
          readBooks={readBooks}
        />
      </div>
    </>
  );
}
