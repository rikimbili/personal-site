import BookCollection from "@components/BookCollection";
import Script from "next/script";
import sanitizeHtml from "sanitize-html";

import { books } from "~/data/books";
import { type Book } from "~/types/books.type";

const REVALIDATE_TIME = 60 * 60; // 1 hour in seconds
const endpoint = "https://www.googleapis.com/books/v1/volumes/{id}";

async function getBooks() {
  const results = await Promise.all(
    books.map(async (book) => {
      const response = await fetch(endpoint.replace("{id}", book.volumeId), {
        next: { revalidate: REVALIDATE_TIME },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch book with id ${book.volumeId}`);
      }
      const data = (await response.json()) as Book;
      data.volumeInfo.description = sanitizeHtml(data.volumeInfo.description, {
        allowedTags: [],
        allowedAttributes: {},
      });
      return { ...data, reading: book.reading };
    }),
  );

  const readingBooks = results.filter((book) => book.reading);
  const allBooks = results.filter((book) => !book.reading);

  return { readingBooks, allBooks };
}

export default async function Bookshelf() {
  const { readingBooks, allBooks } = await getBooks().catch((err) => {
    console.error(err);
    return { readingBooks: [], allBooks: [] };
  });

  return (
    <>
      <Script type={"text/javascript"} src="/google-books-preview-api.js" />
      <Script
        type={"text/javascript"}
        src="/initialize-google-books-api.1.js"
      />
      <div className={"mb-16 mt-24 flex flex-col gap-10"}>
        {readingBooks.length === 0 && allBooks.length === 0 && (
          <h1 className={"text-center text-xl"}>No books to show 😢</h1>
        )}
        <BookCollection readingBooks={readingBooks} allBooks={allBooks} />
      </div>
    </>
  );
}
