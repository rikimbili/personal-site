import BookCollection from "@components/BookCollection";
import Script from "next/script";
import sanitizeHtml from "sanitize-html";

import { books } from "~/data/books";
import { type Book } from "~/types/books.type";

const REVALIDATE_TIME = 60 * 60; // 1 hour in seconds
const endpoint = "https://www.googleapis.com/books/v1/volumes/{id}";

async function getBooks(sorted = true) {
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
      return data;
    }),
  );

  if (sorted) {
    results.sort((a, b) => {
      const titleA = a.volumeInfo.title.toUpperCase();
      const titleB = b.volumeInfo.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }

  return results;
}

export default async function Bookshelf() {
  const books = await getBooks().catch((err) => {
    console.error(err);
    return [];
  });

  return (
    <>
      <Script type={"text/javascript"} src="/google-books-preview-api.js" />
      <Script
        type={"text/javascript"}
        src="/initialize-google-books-api.1.js"
      />
      <div className={"mb-16 mt-24 flex flex-col gap-10"}>
        {books.length === 0 && books.length === 0 && (
          <h1 className={"text-center text-xl"}>No books to show 😢</h1>
        )}
        <BookCollection books={books} />
      </div>
    </>
  );
}
